// Navbar Scroll Effect
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $('.site-header').addClass('header-scrolled');
    } else {
        $('.site-header').removeClass('header-scrolled');
    }
});

// Smooth Scrolling
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top - 100,
        },
        500,
        'linear'
    );
});

// Search functionality
$('.btn-search').on('click', function(e) {
    e.preventDefault();
    const searchTerm = $('.search-box .form-control').val();
    // Add your search logic here
    console.log('Searching for:', searchTerm);
});

// Handle search form submission from index.html
$('#searchForm').on('submit', function(e) {
    e.preventDefault();
    const searchTerm = $('#searchInput').val().toLowerCase().trim();
    if (searchTerm) {
        window.location.href = `service.html?search=${encodeURIComponent(searchTerm)}`;
    }
});

// Handle search on service.html page load
if (window.location.pathname.includes('service.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search')?.toLowerCase();
    
    if (searchTerm) {
        highlightDestination(searchTerm);
    }
}

function highlightDestination(searchTerm) {
    const cards = document.querySelectorAll('.destination-card');
    let found = false;
    let firstMatch = null;
    
    // Add search indicator
    $('.section-title').append(`
        <div class="search-results mt-3">
            <span class="badge bg-primary">Showing results for: ${searchTerm}</span>
            <button class="btn btn-outline-primary btn-sm ms-2" onclick="resetSearch()">Show All</button>
        </div>
    `);

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.description')?.textContent.toLowerCase() || '';
        const location = card.querySelector('.tour-meta')?.textContent.toLowerCase() || '';
        const attractions = card.querySelectorAll('.place-card h4');
        let attractionsText = '';
        attractions.forEach(attraction => {
            attractionsText += attraction.textContent.toLowerCase() + ' ';
        });
        
        const matches = title.includes(searchTerm) || 
                       description.includes(searchTerm) || 
                       location.includes(searchTerm) ||
                       attractionsText.includes(searchTerm);

        card.style.transition = 'all 0.5s ease';
        
        if (matches) {
            card.style.transform = 'scale(1.05)';
            card.style.opacity = '1';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
            card.style.border = '2px solid rgb(246, 4, 4)';
            found = true;
            
            if (!firstMatch) {
                firstMatch = card;
            }
        } else {
            card.style.transform = 'scale(0.95)';
            card.style.opacity = '0.4';
            card.style.boxShadow = 'none';
            card.style.border = 'none';
        }
    });

    // Scroll to first match after animations
    if (firstMatch) {
        setTimeout(() => {
            firstMatch.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 500);
    }

    if (!found) {
        showNoResults(searchTerm);
    }
}

function showNoResults(searchTerm) {
    const container = document.querySelector('.row.g-4');
    const message = document.createElement('div');
    message.className = 'col-12 text-center py-5 no-results-message';
    message.innerHTML = `
        <div class="alert alert-info">
            <h3>No destinations found for "${searchTerm}"</h3>
            <p>Try searching for another destination</p>
            <button class="btn btn-primary mt-3" onclick="resetSearch()">View All Destinations</button>
        </div>
    `;
    container.prepend(message);
}

function resetSearch() {
    // Reset all cards
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        card.style.transition = 'all 0.5s ease';
        card.style.transform = 'scale(1)';
        card.style.opacity = '1';
        card.style.boxShadow = '';
        card.style.border = '';
    });

    // Remove search indicators
    $('.search-results').remove();
    $('.no-results-message').remove();

    // Clear URL parameter
    const url = new URL(window.location.href);
    url.searchParams.delete('search');
    window.history.replaceState({}, '', url);
}

$(document).ready(function() {
    // Category carousel initialization
    $('.category-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    // Feature box animation
    $('.feature-box').hover(
        function() {
            $(this).find('.feature-icon').addClass('animate__animated animate__heartBeat');
        },
        function() {
            $(this).find('.feature-icon').removeClass('animate__animated animate__heartBeat');
        }
    );

    // Remove any previous initialization
    $('.destination-carousel').trigger('destroy.owl.carousel');
    
    // Initialize the destination carousel
    $('.destination-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Add click handler for discover buttons
    const discoverButtons = document.querySelectorAll('.btn-discover');
    discoverButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const destination = this.getAttribute('href');
            window.location.href = destination;
        });
    });
});

// Background Image Rotation for Destination Hero
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.destination-hero');
    if (heroSection) {
        const images = JSON.parse(heroSection.dataset.images);
        let currentIndex = 0;

        // Set initial background
        heroSection.style.backgroundImage = `url('${images[0]}')`;

        // Change background every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        }, 5000);
    }
}); 