// Dummy articles data
const articles = [
    { title: "Python Variables", url: "https://codepro1.netlify.app/featuredarticles/python/python3_variables" },
    { title: "Python Syntax", url: "https://codepro1.netlify.app/featuredarticles/python/python2_syntax" },
    { title: "Python DataTypes", url: "https://codepro1.netlify.app/featuredarticles/python/python4_datatypes" },
    { title: "Python Strings", url: "https://codepro1.netlify.app/featuredarticles/python/python6_strings" },
    { title: "Getting Started With Python", url: "https://codepro1.netlify.app/featuredarticles/python/python1" },
    { title: "Python Operators", url: "https://codepro1.netlify.app/featuredarticles/python/python5_operators" },
];
  
// DOM Elements
const searchContainer = document.querySelector('.search-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const suggestions = document.getElementById('suggestions');
  
// Hide suggestions on page load
window.addEventListener('load', () => {
    suggestions.style.display = 'none';
});
  
// Display suggestions based on input
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const matches = articles.filter(article => 
        article.title.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 suggestions
  
    suggestions.innerHTML = matches.map(
        match => `<li data-url="${match.url}">${match.title}</li>`
    ).join('');
    
    suggestions.style.display = matches.length > 0 ? 'block' : 'none';
});
  
// Handle suggestion click
suggestions.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'LI') {
        navigateToArticle(target.getAttribute('data-url'));
    }
});
  
// Handle search button click or "Enter" key press
searchBtn.addEventListener('click', () => {
    redirectToArticle();
});
  
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        redirectToArticle();
    }
});
  
// Navigate to article and hide search elements
function navigateToArticle(url) {
    // Hide all search elements
    searchContainer.style.display = '';
    suggestions.style.display = '';
    
    // Redirect to the article
    window.location.href = url;
}
  
// Redirect to the first matching article
function redirectToArticle() {
    const query = searchInput.value.toLowerCase();
    const match = articles.find(article =>
        article.title.toLowerCase().includes(query)
    );
  
    if (match) {
        navigateToArticle(match.url);
    } else {
        alert('No articles found!');
    }
}
