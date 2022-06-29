import {Popup} from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm){
    super(popupSelector);
    this._submitHandler = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__name'); //сделать массивоподобный объект
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
    this._form.addEventListener('submit', () => {this._submitHandler(this._getInputValues())});

  };

  close() {
    super.close();
    this._form.reset();
  }
}

export {PopupWithForm};
