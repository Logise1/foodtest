import foods from './data.js';

// DOM Elements
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const quizCard = document.getElementById('quiz-card');
const resultsCard = document.getElementById('results-card');
const foodImageContainer = document.getElementById('foodImageContainer');
const foodEmoji = document.getElementById('foodEmoji');
const foodCategory = document.getElementById('foodCategory');
const foodName = document.getElementById('foodName');
const starsContainer = document.getElementById('starsContainer');
const starBtns = document.querySelectorAll('.star-btn');
const feedbackSection = document.getElementById('feedbackSection');
const dislikeReason = document.getElementById('dislikeReason');
const dislikeOptionsContainer = document.getElementById('dislikeOptionsContainer');
const nextBtn = document.getElementById('nextBtn');
const whatsappBtn = document.getElementById('whatsappBtn');
const viewIngredientsBtn = document.getElementById('viewIngredientsBtn');
const ingredientsList = document.getElementById('ingredientsList');

// State
let currentIndex = 0;
let answers = [];
let currentRating = 0;
let selectedDislikeOptions = [];

const STORAGE_KEY = 'foodRatingApp_progress';

// Initialize
function init() {
    loadProgress(); // Load from LocalStorage
    loadFood(currentIndex);
    setupEventListeners();
}

function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.answers && Array.isArray(data.answers)) {
                answers = data.answers;
                currentIndex = data.answers.length; // Resume from next
            }
        } catch (e) {
            console.error("Failed to load progress", e);
        }
    }
}

function saveProgress() {
    const data = {
        answers: answers
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function clearProgress() {
    localStorage.removeItem(STORAGE_KEY);
}

function loadFood(index) {
    if (index >= foods.length) {
        showResults();
        return;
    }

    const food = foods[index];

    // Reset UI state
    currentRating = 0;
    selectedDislikeOptions = [];
    updateStarsUI(0);
    feedbackSection.classList.add('hidden');
    dislikeReason.value = '';
    dislikeReason.classList.add('hidden');
    ingredientsList.classList.add('hidden'); // Ensure ingredients are hidden initially
    ingredientsList.innerHTML = '';

    // Generate Dislike Options
    dislikeOptionsContainer.innerHTML = '';
    if (food.dislikeOptions) {
        // Dislike Selection Buttons
        [...food.dislikeOptions, "Otro"].forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'dislike-option-btn';
            btn.textContent = opt;
            btn.onclick = () => selectDislikeOption(btn, opt);
            dislikeOptionsContainer.appendChild(btn);
        });

        // Ingredients Info List (Read Only)
        food.dislikeOptions.forEach(ing => {
            const span = document.createElement('span');
            span.className = 'ingredient-tag';
            span.textContent = ing;
            ingredientsList.appendChild(span);
        });
    }

    nextBtn.disabled = true;
    nextBtn.textContent = (index === foods.length - 1) ? 'Finalizar' : 'Siguiente Platillo';

    // Update Content
    foodName.textContent = food.name;
    foodCategory.textContent = food.category;

    // Update Progress
    const progress = ((index + 1) / foods.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${index + 1} / ${foods.length}`;

    // Set Emoji and Color
    foodEmoji.textContent = food.emoji || "🍽️";
    foodImageContainer.style.backgroundColor = food.color || "rgba(0,0,0,0.2)";

    // Animate Emoji
    foodEmoji.animate([
        { opacity: 0, transform: 'scale(0.5)' },
        { opacity: 1, transform: 'scale(1)' }
    ], {
        duration: 400,
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    });
}

function selectDislikeOption(btn, option) {
    // Toggle selection
    if (selectedDislikeOptions.includes(option)) {
        selectedDislikeOptions = selectedDislikeOptions.filter(o => o !== option);
        btn.classList.remove('selected');
    } else {
        selectedDislikeOptions.push(option);
        btn.classList.add('selected');
    }

    // Handle "Otro" visibility
    const isOtherSelected = selectedDislikeOptions.includes("Otro");
    if (isOtherSelected) {
        dislikeReason.classList.remove('hidden');
        if (option === "Otro" && selectedDislikeOptions.includes("Otro")) {
            dislikeReason.focus();
        }
    } else {
        dislikeReason.classList.add('hidden');
    }

    toggleNextButtonState();
}

function setupEventListeners() {
    // Star Rating
    starBtns.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            const value = parseInt(btn.dataset.value);
            updateStarsUI(value, true);
        });

        btn.addEventListener('mouseleave', () => {
            updateStarsUI(currentRating);
        });

        btn.addEventListener('click', () => {
            const value = parseInt(btn.dataset.value);
            currentRating = value;
            updateStarsUI(value);
            handleRatingChange(value);
        });
    });

    // Next Button
    nextBtn.addEventListener('click', goToNext);

    // Enter key to skip to next if valid
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !nextBtn.disabled) {
            if (document.activeElement !== dislikeReason) {
                goToNext();
            }
        }
    });

    // Handle text input validation if needed
    dislikeReason.addEventListener('input', () => {
        if (currentRating < 3 && selectedDislikeOptions.includes("Otro")) {
            toggleNextButtonState();
        }
    });

    // Toggle Ingredients
    viewIngredientsBtn.addEventListener('click', () => {
        ingredientsList.classList.toggle('hidden');
    });
}

function updateStarsUI(rating, isHover = false) {
    starBtns.forEach(btn => {
        const value = parseInt(btn.dataset.value);
        if (value <= rating) {
            btn.classList.add(isHover ? 'hover-active' : 'active');
            btn.textContent = '★'; // Filled
        } else {
            btn.classList.remove('active', 'hover-active');
            btn.textContent = '★'; // Using same char, color controls fill appearance
        }
    });
}

function handleRatingChange(rating) {
    // Show/Hide Feedback
    if (rating < 3) {
        feedbackSection.classList.remove('hidden');
    } else {
        feedbackSection.classList.add('hidden');
    }

    toggleNextButtonState();
}

function toggleNextButtonState() {
    let isValid = false;

    if (currentRating >= 3) {
        isValid = true;
    } else if (currentRating > 0 && currentRating < 3) {
        if (selectedDislikeOptions.length > 0) {
            if (selectedDislikeOptions.includes("Otro")) {
                isValid = dislikeReason.value.trim().length > 2;
            } else {
                isValid = true;
            }
        } else {
            isValid = false;
        }
    }

    nextBtn.disabled = !isValid;
    nextBtn.style.opacity = isValid ? '1' : '0.5';
}

function goToNext() {
    if (nextBtn.disabled) return;

    let finalReasons = [];
    if (currentRating < 3) {
        finalReasons = [...selectedDislikeOptions];
        const otherIndex = finalReasons.indexOf("Otro");
        if (otherIndex > -1) {
            finalReasons[otherIndex] = `Otro: ${dislikeReason.value.trim()}`;
        }
    }

    const answer = {
        foodId: foods[currentIndex].id,
        foodName: foods[currentIndex].name,
        category: foods[currentIndex].category,
        rating: currentRating,
        dislikeReasons: finalReasons
    };

    answers.push(answer);
    saveProgress(); // Save to LocalStorage

    quizCard.animate([
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(-20px)' }
    ], {
        duration: 300
    }).onfinish = () => {
        currentIndex++;
        loadFood(currentIndex);
        quizCard.animate([
            { opacity: 0, transform: 'translateX(20px)' },
            { opacity: 1, transform: 'translateX(0)' }
        ], {
            duration: 300
        });
    };
}

function showResults() {
    clearProgress(); // Clear saved progress on completion
    quizCard.classList.add('hidden');
    resultsCard.classList.remove('hidden');

    const totalRating = answers.reduce((acc, curr) => acc + curr.rating, 0);
    const avg = (totalRating / answers.length).toFixed(1);
    const favorites = answers.filter(a => a.rating === 5).length;
    const dislikes = answers.filter(a => a.rating < 3).length;

    document.getElementById('avgRating').textContent = avg;
    document.getElementById('favoritesCount').textContent = favorites;
    document.getElementById('dislikesCount').textContent = dislikes;

    const exportData = JSON.stringify(answers, null, 2);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(exportData);

    // Download Button
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.onclick = () => {
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "gustos_culinarios.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    // WhatsApp Button
    whatsappBtn.onclick = () => {
        const phoneNumber = "34620702766";
        // Minify to save space
        const jsonMinified = JSON.stringify(answers);
        const message = `¡He completado la encuesta de comida! 🍽️\n\nResultados:\n${jsonMinified}`;
        const encodedMessage = encodeURIComponent(message);

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    // Restart
    document.getElementById('restartBtn').onclick = () => {
        clearProgress(); // Ensure cleared
        window.location.reload();
    };
}

init();
