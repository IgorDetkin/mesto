const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__name');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, formInput, errorMessage) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add('popup__name_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__name-error_active');
};

const hideInputError = (formElement, formInput) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove('popup__name_type_error');
  errorElement.classList.remove('popup__name-error_active');
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
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  })
};

const toggleButtonState = (inputList, saveButton) => {
  if(hasInvalidInput(inputList)) {
    saveButton.classList.add('popup__save_inactive');
    saveButton.disabled = true;
  }
  else {
    saveButton.classList.remove('popup__save_inactive');
    saveButton.disabled = false;
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__name'));
  const saveButton = formElement.querySelector('.popup__form-submit');
  toggleButtonState(inputList, saveButton);

  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      checkInputValidity(formElement, formInput);
      toggleButtonState(inputList, saveButton);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();
