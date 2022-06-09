
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js'

// попап редактирования  и сохранения данных профиля
const buttonEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popup-edit')

const buttonExitPopup = document.querySelector('.popup__exit');
const formElementEdit = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#about-input');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const buttonSubmitForm = document.querySelector('.popup__save');

// // // переменные для карточек
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elements-template').content;

// // // переменные для попапа полного экрана картинкок
const imgPopupImg = document.querySelector('.popup__image-img');
const imgPopupName = document.querySelector('.popup__image-title');
const imgPopup = document.querySelector('#popup-image');
const imgExitButton = document.querySelector('.popup__exit_img')

// // переменные для попапа добавления карточек пользователем
const popupAdd = document.querySelector('#popup-add');
const buttonAdd = document.querySelector('.profile__add');
const formElementAdd = document.querySelector('#formAdd');
const nameInputAdd = document.querySelector('#cardname');
const linkInputAdd = document.querySelector('#cardlink');
const buttonExitPopupAdd = document.querySelector('.popup__exit_add');


// функция открытия любого попапа
function openPopup(popupEdit) {
  // validateFormCard.resetError();
  popupEdit.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// функция закрытия любого попапа
function closePopup(popupEdit) {
  popupEdit.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

// закрытие попапа нажатием на ESC
function closePopupEsc (evt) {
  if (evt.key === 'Escape') {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
  }
};

// закрытие любого попапа кликом на оверлэй
function closePopupOverlay (evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target === evt.currentTarget) {
  closePopup(openedPopup);
  };
}

popupEdit.addEventListener('click', closePopupOverlay);

// функция открытия попапа с уже находящимися внутри данными
function openPopupEdit() {
validateFormProfile.resetError()
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
openPopup(popupEdit);

}

// функция изменения данных в попапе и закрытия после сохранения
function editFormSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

// слушатели для открытия, закрытия и редактирования профиля пользователя
buttonEdit.addEventListener('click', openPopupEdit);
buttonExitPopup.addEventListener('click', function () {closePopup(popupEdit)});
formElementEdit.addEventListener('submit', editFormSubmitHandler);
// popup.addEventListener('click', closePopupOverlay);

// слушатели для открытия, закрытия добавления новых карточек пользователем
buttonAdd.addEventListener('click', function () {openPopup(popupAdd), validateFormCard.resetError()});
buttonExitPopupAdd.addEventListener('click', function () {closePopup(popupAdd)});
formElementAdd.addEventListener('submit', addCard);
popupAdd.addEventListener('click', closePopupOverlay);

// // закрытие карточки на весь экран
imgExitButton.addEventListener('click', function () {closePopup(imgPopup)});
imgPopup.addEventListener('click', closePopupOverlay);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


 function createCard(item) {
  const newCard = new Card(item, '#elements-template');
  return newCard.generateCard(item);
}


// перебор первых 6 карточек из массива
initialCards.forEach((item) => {
  const newCardElement = createCard(item);
  elementsContainer.append(newCardElement);
})

// функция, чтобы карточки мог добавить пользователь в DOM
function addCard (event) {
    event.preventDefault();
    const newCardElement = createCard({name: nameInputAdd.value, link: linkInputAdd.value});
    elementsContainer.prepend(newCardElement);
    closePopup(popupAdd);
    formElementAdd.reset();
    validateFormCard.toggleButtonState();
  }

// функция связывания данных из карточки в попап раскрытия на весь экран и открытие этого попапа
  function viewImg(item) {
    imgPopupImg.src = item.querySelector('.elements__img').src;
    imgPopupImg.alt = item.querySelector('.elements__img').alt;
    imgPopupName.textContent = item.querySelector('.elements__title').textContent;
    openPopup(imgPopup);
  }


const ValidationSetup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__name_type_error',
  errorClass: 'popup__name-error_active'
};

// создание нового экзмепляра класса валидации для формы ред.пользователя
const validateFormProfile = new FormValidator(ValidationSetup, formElementEdit);
validateFormProfile.enableValidation();

// создание нового экземпляра класса валидации для формы добавления карточки.
const validateFormCard = new FormValidator(ValidationSetup, formElementAdd);
validateFormCard.enableValidation();


export {viewImg};
