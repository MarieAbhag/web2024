document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const loadMoreButton = document.getElementById('loadMore');
    let page = 1;

    function loadImages(page) {
        fetch(`extern/images${page}.json`)
            .then(response => response.json())
            .then(data => {
                data.images.forEach(image => {
                    const div = document.createElement('div');
                    div.className = 'gallery-item';
                    div.innerHTML = `
                        <img src= "img/beach/a.png" "{alt="${image.title}">
                        <p>${image.title}</p>
                        <p>${image.description}</p>
                    `;
                    gallery.appendChild(div);
                });
            })
            .catch(error => console.error('Error loading images:', error));
    }

    loadMoreButton.addEventListener('click', function() {
        page++;
        loadImages(page);
    });

    // Initial load
    loadImages(page);
});