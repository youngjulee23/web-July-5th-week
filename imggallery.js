const gallery = document.getElementById('gallery');
const images = gallery.querySelectorAll('img');

let dragImage = null;

images.forEach((image) => {
    image.addEventListener("dragstart", () => {
        image.classList.add("dragging");
        dragImage = image;
    });
    image.addEventListener("dragend", () => {
        image.classList.remove("dragging");
    });
    image.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log('드래그 오버');
    });
    image.addEventListener("drop", (e) => {
        e.preventDefault();
        if (dragImage != image) {
            gallery.insertBefore(dragImage, image);
        }
    })
})