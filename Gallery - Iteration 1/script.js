document.addEventListener("DOMContentLoaded", function() {
    fetch('https://samitaprakash.github.io/gallery/Rococo_Art_Collection.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('gallery');
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-content">
                    <div class="card-front">
                        <img src="${item.imageurl}" alt="${item.workOfArt}">
                        <h3>${item.workOfArt}</h3>
                        <p>Artist: ${item.keyArtists}</p>
                        <p>Medium: ${item.medium}</p>
                        <p>Year: ${item.startYear} - ${item.endYear}</p>
                        <p>Country: ${item.country}</p>
                    </div>
                    <div class="card-back">
                        <h3>About the Art</h3>
                        <p>This piece, titled '${item.workOfArt}', is a prime example of the Rococo movement...</p>
                    </div>
                </div>
            `;
            gallery.appendChild(card);

            // Hover animation
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {scale: 1.05, ease: "power1.out"});
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {scale: 1, ease: "power1.in"});
            });

            // Click to flip animation
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });

        // Loading animation
        gsap.from(".card", {duration: 0.5, opacity: 0, stagger: 0.1, delay: 0.5});
    })
    .catch(error => console.error('Error loading the data:', error));
});
