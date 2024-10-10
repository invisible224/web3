// Modal Functionality
const learnMoreBtn = document.getElementById('learnMoreBtn');
const modal = document.getElementById('learnMoreModal');
const closeModal = document.getElementsByClassName('close')[0];

// Open Modal
learnMoreBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// Close Modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close Modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
