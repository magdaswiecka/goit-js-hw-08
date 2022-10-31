import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const myGallery = document.querySelector(".gallery");

for(const galleryItem of galleryItems) {
  myGallery.insertAdjacentHTML("beforeend", `
  <div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}"
      />
    </a>
  </div>
  `)
}


var lightbox = new SimpleLightbox('.gallery a.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250
});