import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listGalleryRef = document.querySelector('.gallery');

const galleryMarkup = () => {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');

  listGalleryRef.insertAdjacentHTML('beforeend', markup);
};

galleryMarkup(galleryItems);

const gallery = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

console.log(gallery);
console.log(galleryItems);
