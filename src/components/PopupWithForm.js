import {Popup} from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm){
    super(popupSelector);
    this._submitHandler = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__name'); //сделать массивоподобный объект
    this._submitButton = this._popup.querySelector('.popup__form-submit');
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    })
    return values;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues())});
    //форма.послушать(сабмит, функция внутри которой аватарсабмтихандлер с аргументом )
  };

  close() {
    super.close();
    this._form.reset();
  }


loadingButton(loading) {
  if(loading) {
    this._submitButton.textContent = 'Сохранение...'
  }
  else (
    this._submitButton.textContent = 'Сохранить'
  )
  }

}

export {PopupWithForm};
