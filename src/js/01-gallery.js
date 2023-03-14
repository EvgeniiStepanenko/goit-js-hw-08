import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);
const divEl = document.querySelector('.gallery');




function createGalleryMurkup (items ){
    return items
    .map((item) =>`
    
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" 
            alt="${item.description}" />
        </a>
    `
  )
  .join("");
};


const addGalleryMurkup = createGalleryMurkup(galleryItems);

divEl.innerHTML = addGalleryMurkup;


new SimpleLightbox(".gallery a", {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    scrollZoom: false,
   });
