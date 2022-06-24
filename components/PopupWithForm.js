import {Popup} from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm){
    super(popupSelector);
    this._SubmitHandler = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._input = this._form.querySelectorAll('.popup__name');
  }

  _getInputValues() {
    const values = {};
    this._input.forEach((input) => {
      values[input.name] = input.value;
    })
    return values;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {this._SubmitHandler(this._getInputValues())});
  };

  close() {
    super.close();
    this._form.reset();
  }
}

export {PopupWithForm};
