document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    // Simulate loading time (e.g., 3 seconds)
    setTimeout(() => {
        splashScreen.classList.add("hidden"); // Hide splash screen
        mainContent.classList.add("show"); // Show main content
    }, 3000);
});




document.addEventListener('DOMContentLoaded', function() { 
    // Get all elements with the class 'hide' and hide them 
    const hiddenArticles = document.querySelectorAll('.hide'); 
    hiddenArticles.forEach(article => { article.style.display = 'none'; });
 });
function searchArticles() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const articleList = document.getElementById('articleList');
    const articles = articleList.getElementsByTagName('li');

    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        if (article.textContent.toLowerCase().includes(input)) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('modeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bubbleContainer = document.querySelector('.bubble-container');

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        const size = Math.random() * 70 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = Math.random() * 5 + 10 + 's';
        bubble.style.animationTimingFunction = 'cubic-bezier(0.36, 0.45, 0.63, 0.53)';

        bubbleContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 15000);
    }

    setInterval(createBubble, 500);
});


// Select the menu toggle button and navigation
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

// Add click event listener to toggle menu visibility
menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});
// Highlight the current navigation item based on the current URL
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('current');
    } else {
        link.classList.remove('current');
    }
});

