// Sellers Studio Pre-Website JavaScript
// Add this to Settings > Advanced > Code Injection > Footer
// Or add via a Code Block on your page

(function() {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        // Get elements
        const inquireBtn = document.getElementById('inquireBtn');
        const backBtn = document.getElementById('backBtn');
        const landing = document.getElementById('landing');
        const inquiryPanel = document.getElementById('inquiryPanel');

        if (!inquireBtn || !backBtn || !landing || !inquiryPanel) {
            console.warn('Sellers Studio: Required elements not found');
            return;
        }

        // Show inquiry panel with slide animation
        inquireBtn.addEventListener('click', function(e) {
            e.preventDefault();
            landing.classList.add('slide-left');
            inquiryPanel.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Hide inquiry panel and return to home
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            landing.classList.remove('slide-left');
            inquiryPanel.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
})();

