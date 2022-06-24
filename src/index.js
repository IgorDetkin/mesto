
import {Card} from './components/Card.js';
import {FormValidator} from './components/FormValidator.js';
import {Section} from './components/Section.js';
// import {Popup} from '../Popup.js';
import {PopupWithImage} from './components/PopupWithImage.js';
import {PopupWithForm} from './components/PopupWithForm.js';
import {UserInfo} from './components/UserInfo.js';

import './index.css';



// const arhyz = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url);
// const chelyaba = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', import.meta.url);
// const ivanovo = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', import.meta.url);
// const kamchatka = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', import.meta.url);
// const holmogory = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', import.meta.url);
// const baykal = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', import.meta.url);



// import arhyz from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
// import chelyaba from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
// import ivanovo from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
// import kamchatka from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
// import holmogory from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
// import baykal from 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';





// попап редактирования  и сохранения данных профиля
const buttonEdit = document.querySelector('.profile__edit');
// const popupEdit = document.querySelector('#popup-edit')

// const buttonExitPopup = document.querySelector('.popup__exit');
const formElementEdit = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#about-input');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
// const buttonSubmitForm = document.querySelector('.popup__save');

// // // переменные для карточек
const elementsContainer = document.querySelector('.elements');
// const elementTemplate = document.querySelector('#elements-template').content;

// // // переменные для попапа полного экрана картинкок
// const imgPopupImg = document.querySelector('.popup__image-img');
// const imgPopupName = document.querySelector('.popup__image-title');
// const imgPopup = document.querySelector('#popup-image');
// const imgExitButton = document.querySelector('.popup__exit_img')

// // переменные для попапа добавления карточек пользователем
// const popupAdd = document.querySelector('#popup-add');
const buttonAdd = document.querySelector('.profile__add');
const formElementAdd = document.querySelector('#formAdd');
const nameInputAdd = document.querySelector('#cardname');
const linkInputAdd = document.querySelector('#cardlink');
// const buttonExitPopupAdd = document.querySelector('.popup__exit_add');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    // link: arhyz
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    // link: chelyaba
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    // link: ivanovo
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    // link: kamchatka
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    // link: holmogory
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    // link: baykal
  }
];

const validationSetup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__name_type_error',
  errorClass: 'popup__name-error_active'
};


// открытие попапа с уже существующими данными
function openPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  validateFormProfile.resetError();
  // openPopup(popupEdit);
  newPopupEdit.open();
  }



// создание любой карточки
 function createCard(item) {
  const newCard = new Card(item, '#elements-template');
  return newCard.generateCard(item);
  // newPopupImg.open(item);

}


// функция, чтобы карточки мог добавить пользователь в DOM
function addCard () {
    const newCardElement = createCard({name: nameInputAdd.value, link: linkInputAdd.value});
    elementsContainer.prepend(newCardElement);
    newPopupAddCard.close();
    formElementAdd.reset();
  }


// отрисовка элементов на странице
const newSection = new Section(
  { items: initialCards,
    renderer: (item) => {
      newSection.setItem(createCard(item))}
  },
  '.elements'
  );

// вызов метода класса в котором происходит перебор, внутри которого есть функция createcard
newSection.renderItems(initialCards);


// создание экземпляра отвечающего за отображение информации о пользователе на странице
const newEditUserInfo = new UserInfo ({
  nameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle'
});

// функция чтобы при нажатии кнопки "Сохранить" в попапе, введенное в поля формы попадало на страницу.
function editFormSubmitHandler() {
  newEditUserInfo.setUserInfo(nameInput.value, jobInput.value);
  newPopupEdit.close();
};


// функция обернутая в функцию, чтобы при нажатии на кнопку "Создать" в попапе, создавалась новая
// карточка и добавлялась на страницу
function cardFormSubmitHandler() {
  addCard();
}


// функция-обёртка для открытия попапов с картинками на весь экран. Передается в Card.js
function handleCardClick(item) {
  newPopupImg.open(item);
  };

export {handleCardClick}




// создание нового экзмепляра класса валидации для формы ред.пользователя
const validateFormProfile = new FormValidator(validationSetup, formElementEdit);
validateFormProfile.enableValidation();

// создание нового экземпляра класса валидации для формы добавления карточки.
const validateFormCard = new FormValidator(validationSetup, formElementAdd);
validateFormCard.enableValidation();


const newPopupEdit = new PopupWithForm('#popup-edit', editFormSubmitHandler);
const newPopupAddCard = new PopupWithForm('#popup-add', cardFormSubmitHandler);
const newPopupImg = new PopupWithImage('#popup-image');


newPopupEdit.setEventListeners();
newPopupAddCard.setEventListeners();
newPopupImg.setEventListeners();


buttonEdit.addEventListener('click', openPopupEdit);
buttonAdd.addEventListener('click', function () {
    newPopupAddCard.open();
    validateFormCard.resetError();
});
