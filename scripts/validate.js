
const ValidationSetup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__name_type_error',
  errorClass: 'popup__name-error_active'
};

const formElement = document.querySelector(ValidationSetup.formSelector);
const formInput = formElement.querySelector(ValidationSetup.inputSelector);
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, formInput, errorMessage) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add(ValidationSetup.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(ValidationSetup.errorClass);
};

const hideInputError = (formElement, formInput) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(ValidationSetup.inputErrorClass);
  errorElement.classList.remove(ValidationSetup.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
};

const hasInvalidInput = (inputList) => {
  checkInputValidity(formElement, formInput);
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  })
};

// функция которая делает кнопку save нерабочей
function disableSaveButton (saveButton) {
  saveButton.classList.add(ValidationSetup.inactiveButtonClass);
  saveButton.disabled = true;
}

// функция, которая делает кнопку save рабочей
function enableSaveButton (saveButton) {
  saveButton.classList.remove(ValidationSetup.inactiveButtonClass);
  saveButton.disabled = false;
}

const toggleButtonState = (inputList, saveButton) => {
  if(hasInvalidInput(inputList)) {
    disableSaveButton (saveButton)
  }
  else {
    enableSaveButton (saveButton);
  }
}



const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(ValidationSetup.inputSelector));
  const saveButton = formElement.querySelector(ValidationSetup.submitButtonSelector);
  toggleButtonState(inputList, saveButton);

  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      checkInputValidity(formElement, formInput);
      toggleButtonState(inputList, saveButton);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(ValidationSetup.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();

