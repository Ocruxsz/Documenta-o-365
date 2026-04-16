// Search functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const allCards = document.querySelectorAll('.link-card');
    const allSections = document.querySelectorAll('.category-section');
    const allSubcategories = document.querySelectorAll('.subcategory');

    allCards.forEach(card => {
        const title = card.querySelector('.link-title').textContent.toLowerCase();
        const url = card.querySelector('.link-url').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || url.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    // Hide empty subcategories
    allSubcategories.forEach(subcategory => {
        const visibleCards = subcategory.querySelectorAll('.link-card:not(.hidden)');
        if (visibleCards.length === 0) {
            subcategory.classList.add('hidden');
        } else {
            subcategory.classList.remove('hidden');
        }
    });

    // Hide empty sections
    allSections.forEach(section => {
        const visibleCards = section.querySelectorAll('.link-card:not(.hidden)');
        if (visibleCards.length === 0) {
            section.classList.add('hidden');
        } else {
            section.classList.remove('hidden');
        }
    });
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
