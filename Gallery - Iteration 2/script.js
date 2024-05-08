document.addEventListener('DOMContentLoaded', function () {
    fetch('https://samitaprakash.github.io/gallery/Rococo_Art_Collection.json')
        .then(response => response.json())
        .then(data => setupGallery(data))
        .catch(error => console.error('Error loading the JSON file:', error));

    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName("close")[0];
    const artTitle = document.getElementById('artTitle');
    const artDetails = document.getElementById('artDetails');

    function setupGallery(paintings) {
        paintings.forEach(painting => {
            let img = document.createElement('img');
            img.src = painting.imageurl;
            img.alt = painting.workOfArt;
            img.addEventListener('click', function () {
                artTitle.innerText = painting.workOfArt;
                artDetails.innerHTML = `Artist: ${painting.keyArtists}<br>Period: ${painting.startYear} - ${painting.endYear}<br>Medium: ${painting.medium}<br>Country: ${painting.country}`;
                modal.style.display = "block";
            });
            gallery.appendChild(img);
        });
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
