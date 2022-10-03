import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsMarkup = document.querySelector(".gallery");
const galleryFoo = galleryMarkup(galleryItems);

galleryItemsMarkup.insertAdjacentHTML("afterbegin", galleryFoo);


function galleryMarkup(galleries) {
  return galleries
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`;
  })
  .join("");
}

galleryItemsMarkup.addEventListener("click", onClickThePhoto);
function onClickThePhoto(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
        window.addEventListener("keydown", onCloseKey);
      },
      onClose: () => {
        window.removeEventListener("keydown", onCloseKey);
      },
    }
  );

  instance.show();

  function onCloseKey(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
}
