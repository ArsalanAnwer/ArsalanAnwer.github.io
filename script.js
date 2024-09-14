// Example JavaScript interactions (optional)
document.addEventListener('DOMContentLoaded', function() {
    // Scroll down button action
    document.querySelector('.button').addEventListener('click', function() {
        const workSection = document.getElementById('work');
        workSection.scrollIntoView({ behavior: 'smooth' });
    });
});
