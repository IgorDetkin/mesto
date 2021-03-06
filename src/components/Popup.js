class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose); // это для закрытия через esc
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);  // это для закрытия через esc
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    const buttonExitPopup = this._popup.querySelector('.popup__exit');
    this._popup.addEventListener('click', (evt) => {
      if(
        evt.target === buttonExitPopup || evt.target === evt.currentTarget
        ) {
        this.close();
      }
      })
  }
}

export {Popup};
