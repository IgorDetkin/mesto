import {Popup} from './Popup.js';


class PopupWithImage extends Popup {

  open(text, link) {
    const image = this._popup.querySelector('.popup__image-img');
    const caption = this._popup.querySelector('.popup__image-title');
    image.src = link;
    image.alt = text;
    caption.textContent = text;
    super.open();
  }
}

export {PopupWithImage};
