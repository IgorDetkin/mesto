import {Popup} from './Popup.js';


class PopupWithImage extends Popup {
  // constructor(popupSelector) {
  //   super(popupSelector);
  //   this._popupImgImg = this._popup.querySelector('.popup__image-img');
  //   this._popupImgName = this._popup.querySelector('.popup__image-title');
  // }

  open(item) {
    this._popupImgImg = this._popup.querySelector('.popup__image-img');
    this._popupImgName = this._popup.querySelector('.popup__image-title');
    this._popupImgImg.src = item.querySelector('.elements__img').src;
    this._popupImgImg.alt = item.querySelector('.elements__img').alt;
    this._popupImgName.textContent = item.querySelector('.elements__title').textContent;
    super.open();
  }
}

export {PopupWithImage};
