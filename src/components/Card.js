

 class Card {
  constructor (initialCards, cardSelector, imageHandler) {
    this._link = initialCards.link;
    this._name = initialCards.name;
    this._cardSelector = cardSelector;
    this._imageHandler = imageHandler;
  }

  // найти нужный элемент
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__card').cloneNode(true);
    return cardElement
  }

  // вставить карточку в разметку
  generateCard () {
    this._element = this._getTemplate();
    this._elementTitle = this._element.querySelector(".elements__title");
    this._elementImg = this._element.querySelector(".elements__img");
    this._like = this._element.querySelector(".elements__like");

    this._setEventListeners();

    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._elementTitle.textContent = this._name;
    return this._element
  }

// // метод лайка карточки
_toggleLikeHandler() {
  this._like.classList.toggle('elements__like_active');
};

// // метод удаления карточки
_deleteCardHandler() {
  this._element.remove();
  this._element = null;
};

// слушатели
_setEventListeners () {
  this._like.addEventListener('click', () => {this._toggleLikeHandler()});
  this._element.querySelector('.elements__delete').addEventListener('click', () => {this._deleteCardHandler()});
  this._elementImg.addEventListener('click', () => {this._imageHandler(this._element)});
  }
}

export {Card};
