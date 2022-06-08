
 const ValidationSetup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__name_type_error',
  errorClass: 'popup__name-error_active'
};

class FormValidator {
  constructor(Object, formElement) {
    this._formSelector = Object.formSelector;
    this._inputSelector = Object.inputSelector;
    this._submitButtonSelector = Object.submitButtonSelector;
    this._inactiveButtonClass = Object.inactiveButtonClass;
    this._inputErrorClass = Object.inputErrorClass;
    this._errorClass = Object.errorClass;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    // this._buttonElement = document.querySelector(this._submitButtonSelector); //пока было так, оно не работало
    this._inputList = Array.from(formElement.querySelectorAll(Object.inputSelector));
  }

  // показать сообщение об ошибке
  _showInputError = (formInput) => {
  const errorElement = this._formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add(this._inputErrorClass);
  errorElement.textContent = formInput.validationMessage;
  errorElement.classList.add(this._errorClass);
};

// спрятать сообщение об ошибке
_hideInputError = (formInput) => {
  const errorElement = this._formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};

// проверка нужно ли выводить сообщение об ошибке. Если поле ввода не валидно, то вызови функцию вывода сообщения об ошибки
// если поле ввода валидно, то скрой сообщение об ошибке
 _checkInputValidity = (formInput) => {
  if (!formInput.validity.valid) {
    this._showInputError(formInput);
  } else {
    this._hideInputError(formInput);
  }
};

_hasInvalidInput = () => {
  // this._checkInputValidity(formInput);
  return this._inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
};

toggleButtonState = () => {
  if (this._hasInvalidInput()) {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._inactiveButtonClass);
  } else {
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  }
};

_setEventListeners = () => {
  this._formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  this.toggleButtonState();
  this._inputList.forEach((formInput) => {formInput.addEventListener('input', () => {
      this._checkInputValidity(formInput);
      this.toggleButtonState();
    });
  });
};

enableValidation = () => {
  this._setEventListeners();
};

resetError = () => {
  this._inputList.forEach((formInput) => {
    this._hideInputError(formInput);
  });
  this.toggleButtonState();
  };
}


export {ValidationSetup, FormValidator};
