function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the back-to-top button when the user scrolls down
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});