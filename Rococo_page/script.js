// script.js

document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector('.hamburger-menu');
    var nav = document.querySelector('.navigation');

    menu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');

    // Fetch JSON data from the server hosting the JSON file
    fetch('https://samitaprakash.github.io/gallery/Rococo_Art_Collection.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((img, index) => {
            const card = document.createElement('div');
            card.className = 'card';

            const cardInner = document.createElement('div');
            cardInner.className = 'card-inner';

            const cardFront = document.createElement('div');
            cardFront.className = 'card-front';
            cardFront.style.backgroundImage = `url(${img.imageurl})`;

            const cardBack = document.createElement('div');
            cardBack.className = 'card-back';
            cardBack.innerHTML = `<h4>${img.workOfArt}</h4><p>${img.keyArtists}<br>${img.startYear}-${img.endYear}</p>`;

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            gallery.appendChild(card);

            // GSAP animation for each card
            gsap.from(card, {
                duration: 0.5,        // Duration of the animation
                scale: 0.5,           // Start from half size
                opacity: 0,           // Start from fully transparent
                delay: index * 0.1,   // Delay each card slightly based on its index to create a stagger effect
                ease: 'back.out(1.7)' // Elastic easing for a pop effect
            });
        });
    })
    .catch(error => {
        console.error('Error loading the JSON file:', error);
        gallery.innerHTML = '<p>Error loading gallery. Please try again later.</p>';
    });
});
