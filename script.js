// Get elements
const inquireBtn = document.getElementById('inquireBtn');
const backBtn = document.getElementById('backBtn');
const landing = document.getElementById('landing');
const inquiryPanel = document.getElementById('inquiryPanel');

// Show inquiry panel with slide animation
inquireBtn.addEventListener('click', (e) => {
    e.preventDefault();
    landing.classList.add('slide-left');
    inquiryPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Hide inquiry panel and return to home
backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    landing.classList.remove('slide-left');
    inquiryPanel.classList.remove('active');
    document.body.style.overflow = 'auto';
});
