
import {initialCards, Card} from './card.js';
import {ValidationSetup, FormValidator} from './formValidator.js'

// попап редактирования  и сохранения данных профиля
const editButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const exitButton = document.querySelector('.popup__exit');
const editFormElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#about-input');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const saveButton = document.querySelector('.popup__save');
const saveButtonStatus = document.querySelector('.popup__save-status');

// // // переменные для карточек
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elements-template').content;

// // // переменные для попапа полного экрана картинкок
const imgPopupImg = document.querySelector('.popup__image-img');
const imgPopupName = document.querySelector('.popup__image-title');
const imgPopup = document.querySelector('#popup-image');
const imgExitButton = document.querySelector('.popup__exit_img')

// // переменные для попапа добавления карточек пользователем
const addPopup = document.querySelector('#popup-add');
const addButton = document.querySelector('.profile__add');
const addFormElement = document.querySelector('#formAdd');
const addNameInput = document.querySelector('#cardname');
const addLinkInput = document.querySelector('#cardlink');
const addExitButton = document.querySelector('.popup__exit_add');


// функция открытия любого попапа
function openPopup(popup) {
  validateFormCard.resetError();
  validateFormProfile.resetError();
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// функция закрытия любого попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
  if (evt.target === openedPopup) {
  closePopup(openedPopup);
  };
}

popup.addEventListener('click', closePopupOverlay);

// функция открытия попапа с уже находящимися внутри данными
function openPopupEdit() {
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
openPopup(popup);
}

// функция изменения данных в попапе и закрытия после сохранения
function editFormSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popup);

}

// слушатели для открытия, закрытия и редактирования профиля пользователя
editButton.addEventListener('click', openPopupEdit);
exitButton.addEventListener('click', function () {closePopup(popup)});
editFormElement.addEventListener('submit', editFormSubmitHandler);
// popup.addEventListener('click', closePopupOverlay);

// слушатели для открытия, закрытия добавления новых карточек пользователем
addButton.addEventListener('click', function () {openPopup(addPopup)});
addExitButton.addEventListener('click', function () {closePopup(addPopup)});
addFormElement.addEventListener('submit', addCard);
addPopup.addEventListener('click', closePopupOverlay);

// // закрытие карточки на весь экран
imgExitButton.addEventListener('click', function () {closePopup(imgPopup)});
imgPopup.addEventListener('click', closePopupOverlay);


// перебор первых 6 карточек из массива
initialCards.forEach((item) => {
  const newCard = new Card(item, '#elements-template');
  const newCardElement = newCard.generateCard();
  document.querySelector('.elements').append(newCardElement);
})

// функция, чтобы карточки мог добавить пользователь в DOM
function addCard (event) {
    event.preventDefault();
    const newCard = new Card({name: addNameInput.value, link: addLinkInput.value}, '#elements-template');
    const newCardElement = newCard.generateCard();
    document.querySelector('.elements').prepend(newCardElement);
    closePopup(addPopup);
    validateFormCard.toggleButtonState();
    addFormElement.reset();
  }

// функция связывания данных из карточки в попап раскрытия на весь экран и открытие этого попапа
  function viewImg(item) {
    imgPopupImg.src = item.querySelector('.elements__img').src;
    imgPopupImg.alt = item.querySelector('.elements__img').alt;
    imgPopupName.textContent = item.querySelector('.elements__title').textContent;
    openPopup(imgPopup);
  }


// создание нового экзмепляра класса валидации для формы ред.пользователя
const validateFormProfile = new FormValidator(ValidationSetup, editFormElement);
validateFormProfile.enableValidation();

// создание нового экземпляра класса валидации для формы добавления карточки.
const validateFormCard = new FormValidator(ValidationSetup, addFormElement);
validateFormCard.enableValidation();


export {viewImg};
