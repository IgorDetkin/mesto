
import {Card} from './components/Card.js';
import {FormValidator} from './components/FormValidator.js';
import {Section} from './components/Section.js';
// import {Popup} from '../Popup.js';
import {PopupWithImage} from './components/PopupWithImage.js';
import {PopupWithForm} from './components/PopupWithForm.js';
import {UserInfo} from './components/UserInfo.js';
import {initialCards, validationSetup} from './utils/data.js';
import {buttonEdit, formElementEdit, nameInput, jobInput,
  elementsContainer, buttonAdd,formElementAdd} from './utils/constants.js';

import './index.css';


// открытие попапа с уже существующими данными
function openPopupEdit() {
  const data = newEditUserInfo.getUserInfo();
  nameInput.value = data.name
  jobInput.value = data.about;
  validateFormProfile.resetError();
  // openPopup(popupEdit);
  newPopupEdit.open();
  }

// создание любой карточки
 function createCard(data) {
  const newCard = new Card(data, '#elements-template', () => {
    newPopupImg.open(data.name, data.link);
  });
  return newCard.generateCard(data);
}


const addCard = (data) => {
  const newCardElement = createCard({
    name: data.name,
    link: data.link
  }); //ВНИМАНИЕ!!!!!!!!
  newSection.setItem(newCardElement);
  newPopupAddCard.close();
  formElementAdd.reset();
}

// отрисовка элементов на странице
const newSection = new Section(
  { items: initialCards,
    renderer: (data) => {
      newSection.setItem(createCard(data))}
  },
  '.elements'
  );

// вызов метода класса в котором происходит перебор, внутри которого есть функция createcard
newSection.renderItems();


// создание экземпляра отвечающего за отображение информации о пользователе на странице
const newEditUserInfo = new UserInfo ({
  nameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle'
});


const editFormSubmitHandler = (data) => {
  const { name, about } = data;
  newEditUserInfo.setUserInfo(name, about);
  newPopupEdit.close();
};


// создание нового экзмепляра класса валидации для формы ред.пользователя
const validateFormProfile = new FormValidator(validationSetup, formElementEdit);
validateFormProfile.enableValidation();

// создание нового экземпляра класса валидации для формы добавления карточки.
const validateFormCard = new FormValidator(validationSetup, formElementAdd);
validateFormCard.enableValidation();


const newPopupEdit = new PopupWithForm('#popup-edit', editFormSubmitHandler);

const newPopupAddCard = new PopupWithForm('#popup-add', addCard);
const newPopupImg = new PopupWithImage('#popup-image');


newPopupEdit.setEventListeners();
newPopupAddCard.setEventListeners();
newPopupImg.setEventListeners();


buttonEdit.addEventListener('click', openPopupEdit);
buttonAdd.addEventListener('click', function () {
    newPopupAddCard.open();
    validateFormCard.resetError();
});
