import {viewImg} from './script.js'


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


 class Card {
  constructor (initialCards) {
    this._link = initialCards.link;
    this._name = initialCards.name;
    // this._viewImg = viewImg;
  }

  // найти нужный элемент
  _getTemplate() {
    const cardElement = document.querySelector('#elements-template').content.querySelector('.elements__card').cloneNode(true);
    return cardElement
  }

  // вставить карточку в разметку
  generateCard () {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._elementTitle = this._element.querySelector(".elements__title");
    this._elementImg = this._element.querySelector(".elements__img");

    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._elementTitle.textContent = this._name;
    // viewImg(this._element);
    return this._element
  }

// // метод лайка карточки
_toggleLikeHandler() {
  this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
};

// // метод удаления карточки
_deleteCardHandler() {
  this._element.remove();
};

// слушатели
_setEventListeners () {
  this._element.querySelector('.elements__like').addEventListener('click', () => {this._toggleLikeHandler()});
  this._element.querySelector('.elements__delete').addEventListener('click', () => {this._deleteCardHandler()});
  this._element.querySelector('.elements__img').addEventListener('click', () => {viewImg(this._element)});
  }
}

export {initialCards, Card};
