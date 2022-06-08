
// const ValidationSetup = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__name',
//   submitButtonSelector: '.popup__save',
//   inactiveButtonClass: 'popup__save_inactive',
//   inputErrorClass: 'popup__name_type_error',
//   errorClass: 'popup__name-error_active'
// };

// const formElement = document.querySelector(ValidationSetup.formSelector);
// const formInput = formElement.querySelector(ValidationSetup.inputSelector);
// const formError = formElement.querySelector(`.${formInput.id}-error`);

// const showInputError = (formElement, formInput, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${formInput.id}-error`);
//   formInput.classList.add(ValidationSetup.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(ValidationSetup.errorClass);
// };

// const hideInputError = (formElement, formInput) => {
//   const errorElement = formElement.querySelector(`.${formInput.id}-error`);
//   formInput.classList.remove(ValidationSetup.inputErrorClass);
//   errorElement.classList.remove(ValidationSetup.errorClass);
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, formInput) => {
//   if (!formInput.validity.valid) {
//     showInputError(formElement, formInput, formInput.validationMessage);
//   } else {
//     hideInputError(formElement, formInput);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   checkInputValidity(formElement, formInput);
//   return inputList.some((formInput) => {
//     return !formInput.validity.valid;
//   })
// };

// // функция которая делает кнопку save нерабочей
// function disableSaveButton (saveButton) {
//   saveButton.classList.add(ValidationSetup.inactiveButtonClass);
//   saveButton.disabled = true;
// }

// // функция, которая делает кнопку save рабочей
// function enableSaveButton (saveButton) {
//   saveButton.classList.remove(ValidationSetup.inactiveButtonClass);
//   saveButton.disabled = false;
// }

// const toggleButtonState = (inputList, saveButton) => {
//   if(hasInvalidInput(inputList)) {
//     disableSaveButton (saveButton)
//   }
//   else {
//     enableSaveButton (saveButton);
//   }
// }



// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll(ValidationSetup.inputSelector));
//   const saveButton = formElement.querySelector(ValidationSetup.submitButtonSelector);
//   toggleButtonState(inputList, saveButton);

//   inputList.forEach((formInput) => {
//     formInput.addEventListener('input', () => {
//       checkInputValidity(formElement, formInput);
//       toggleButtonState(inputList, saveButton);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll(ValidationSetup.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement);
//   });
// };

// enableValidation();






// ЧЕРЕЗ ООП

// const editFormElement = document.querySelector('.popup__form');


// const ValidationSetup = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__name',
//   submitButtonSelector: '.popup__save',
//   inactiveButtonClass: 'popup__save_inactive',
//   inputErrorClass: 'popup__name_type_error',
//   errorClass: 'popup__name-error_active'
// };


// const formElement = document.querySelector(ValidationSetup.formSelector);
// const formInput = formElement.querySelector(ValidationSetup.inputSelector);
// const formError = formElement.querySelector(`.${formInput.id}-error`);

// class FormValidator {
//   constructor(ValidationSetup, formElement) {
//     this._formSelector = ValidationSetup.formSelector;
//     this._inputSelector = ValidationSetup.inputSelector;
//     this._submitButtonSelector = ValidationSetup.submitButtonSelector;
//     this._inactiveButtonClass = ValidationSetup.inactiveButtonClass;
//     this._inputErrorClass = ValidationSetup.inputErrorClass;
//     this._errorClass = ValidationSetup.errorClass;
//     this._formElement = formElement;
//     this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
//     this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
//   }

//   // показать сообщение об ошибке
//   _showInputError = (formElement, formInput, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${formInput.id}-error`);
//   formInput.classList.add(this._inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(this._errorClass);
// };

// // спрятать сообщение об ошибке
// _hideInputError = (formElement, formInput) => {
//   const errorElement = formElement.querySelector(`.${formInput.id}-error`);
//   formInput.classList.remove(this._inputErrorClass);
//   errorElement.classList.remove(this._.errorClass);
//   errorElement.textContent = '';
// };


// // проверка нужно ли выводить сообщение об ошибке. Если поле ввода не валидно, то вызови функцию вывода сообщения об ошибки
// // если поле ввода валидно, то скрой сообщение об ошибке
//  _checkInputValidity = (formElement, formInput) => {
//   if (!formInput.validity.valid) {
//     showInputError(formElement, formInput, formInput.validationMessage);
//   } else {
//     hideInputError(formElement, formInput);
//   }
// };


// // хз что это делает, не помню
// _hasInvalidInput = (inputList) => {
//   checkInputValidity(formElement, formInput);
//   return inputList.some((formInput) => {
//     return !formInput.validity.valid;
//   })
// };

// // функция которая делает кнопку save нерабочей
// _disableSaveButton (saveButton) {
//   saveButton.classList.add(this._inactiveButtonClass);
//   saveButton.disabled = true;
// }

// // функция, которая делает кнопку save рабочей
// _enableSaveButton (saveButton) {
//   saveButton.classList.remove(this._inactiveButtonClass);
//   saveButton.disabled = false;
// }

// // функция, которая в зависимости от правильности введенного в поле ввода меняет состояние кнопки Save
// _toggleButtonState = (inputList, saveButton) => {
//   if(hasInvalidInput(inputList)) {
//     disableSaveButton (saveButton)
//   }
//   else {
//     enableSaveButton (saveButton);
//   }
// }


// // набор слушателей формы 1перебор всех форм, 2кнопка сохранения, 3переключение этой кнопки
// _setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
//   const saveButton = formElement.querySelector(this._submitButtonSelector);
//   toggleButtonState(inputList, saveButton);

//   inputList.forEach((formInput) => { formInput.addEventListener('input', () => {
//       checkInputValidity(formElement, formInput);
//       toggleButtonState(inputList, saveButton);
//     })
//   })
// }

//   enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll(this._formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     this._setEventListeners(formElement);
//   });
// };

// }

// enableValidation();



// const validateFormProfile = new FormValidator(ValidationData, formProfile);
// validateFormProfile.enableValidation();


// const validateFormCard = new FormValidator(ValidationData, formPhoto);
// validateFormCard.enableValidation();
// }






// ВАЛИДАЦИЯ, КОТОРАЯ РАБОТАЛА, НО НЕ ТОЛЬКО ЛИШЬ!
  // // валидация временно здесь
  // const ValidationSetup = {
  //   formSelector: '.popup__form',
  //   inputSelector: '.popup__name',
  //   submitButtonSelector: '.popup__save',
  //   inactiveButtonClass: 'popup__save_inactive',
  //   inputErrorClass: 'popup__name_type_error',
  //   errorClass: 'popup__name-error_active'
  // };


  // const formElement = document.querySelector(ValidationSetup.formSelector);
  // const formInput = formElement.querySelector(ValidationSetup.inputSelector);
  // const formError = formElement.querySelector(`.${formInput.id}-error`);

  // class FormValidator {
  //   constructor(ValidationSetup, formElement) {
  //     this._formSelector = ValidationSetup.formSelector;
  //     this._inputSelector = ValidationSetup.inputSelector;
  //     this._submitButtonSelector = ValidationSetup.submitButtonSelector;
  //     this._inactiveButtonClass = ValidationSetup.inactiveButtonClass;
  //     this._inputErrorClass = ValidationSetup.inputErrorClass;
  //     this._errorClass = ValidationSetup.errorClass;
  //     this._formElement = formElement;
  //     this._buttonElement = formElement.querySelector(ValidationSetup.submitButtonSelector);
  //     this._inputList = Array.from(formElement.querySelectorAll(ValidationSetup.inputSelector));
  //   }

  //   // показать сообщение об ошибке
  //   _showInputError = (formElement, formInput, errorMessage) => {

  //   const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  //   formInput.classList.add(this._inputErrorClass);
  //   errorElement.textContent = errorMessage;
  //   errorElement.classList.add(this._errorClass);
  // };

  // // спрятать сообщение об ошибке
  // _hideInputError = (formElement, formInput) => {
  //   const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  //   formInput.classList.remove(this._inputErrorClass);
  //   errorElement.classList.remove(this._errorClass);
  //   errorElement.textContent = '';
  // };


  // // проверка нужно ли выводить сообщение об ошибке. Если поле ввода не валидно, то вызови функцию вывода сообщения об ошибки
  // // если поле ввода валидно, то скрой сообщение об ошибке
  //  _checkInputValidity = (formElement, formInput) => {
  //   if (!formInput.validity.valid) {
  //     this._showInputError(formElement, formInput, formInput.validationMessage);
  //   } else {
  //     this._hideInputError(formElement, formInput);
  //   }
  // };


  // //
  // _hasInvalidInput = (inputList) => {
  //   this._checkInputValidity(formElement, formInput);
  //   return this._inputList.some((formInput) => {
  //     return !formInput.validity.valid;
  //   })
  // };

  // // функция которая делает кнопку save нерабочей
  // _disableSaveButton (saveButton) {
  //   saveButton.classList.add(this._inactiveButtonClass);
  //   saveButton.disabled = true;
  // }

  // // функция, которая делает кнопку save рабочей
  // _enableSaveButton (saveButton) {
  //   saveButton.classList.remove(this._inactiveButtonClass);
  //   saveButton.disabled = false;
  // }

  // // функция, которая в зависимости от правильности введенного в поле ввода меняет состояние кнопки Save
  // _toggleButtonState = () => {
  //   if(this._hasInvalidInput(this._inputList)) {
  //     this._disableSaveButton (saveButton)
  //   }
  //   else {
  //     this._enableSaveButton (saveButton);
  //   }
  // }


  // // набор слушателей формы 1перебор всех форм, 2кнопка сохранения, 3переключение этой кнопки
  // _setEventListeners = (formElement) => {
  //   // const inputList = Array.from(this._formElement.querySelector(this._inputSelector));
  //   const saveButton = this._formElement.querySelector(this._submitButtonSelector);

  //   this._toggleButtonState();

  //   this._inputList.forEach((formInput) => {formInput.addEventListener('input', () => {
  //       this._checkInputValidity(formElement, formInput);
  //       this._toggleButtonState(saveButton); // cтер inputList
  //     })
  //   })
  // }

  //   enableValidation = () => {
  //   const formList = Array.from(document.querySelectorAll(this._formSelector));
  //   formList.forEach((formElement) => {
  //     this._formElement.addEventListener('submit', (evt) => {
  //       evt.preventDefault();
  //     });
  //     this._setEventListeners(formElement);
  //   });
  // };

  // // enableValidation = () => {
  // //   this._setEventListeners();
  // // };

  // }



  // const validateFormProfile = new FormValidator(ValidationSetup, editFormElement);
  // validateFormProfile.enableValidation();


  // const validateFormCard = new FormValidator(ValidationSetup, addFormElement);
  // validateFormCard.enableValidation();




