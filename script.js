// script.js
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');

    // Fetch JSON data from the server hosting the JSON file
    fetch('https://samitaprakash.github.io/gallery/Rococo_Art_Collection.json')  // Update the path to where the JSON file is hosted
    .then(response => response.json())
    .then(data => {
        data.forEach(img => {
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
        });
    })
    .catch(error => {
        console.error('Error loading the JSON file:', error);
        gallery.innerHTML = '<p>Error loading gallery. Please try again later.</p>';
    });
});
