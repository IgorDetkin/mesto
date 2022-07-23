

 class Card {
  constructor (item, cardSelector, imageHandler, userId, deleteCardIconClick, likeCardClick) {
    this._link = item.link;
    this._name = item.name;
    this._cardSelector = cardSelector;
    this._imageHandler = imageHandler;
    this._deleteCardIconClick = deleteCardIconClick;
    this._likeCardClick = likeCardClick;
    // this._deleteLikeCardClick = deleteLikeCardClick;
    this._cardId = item._id;
    this._ownerId = item.owner._id;
    this._userId = userId;
    this._likes = item.likes; //массив лайков
    this._isLiked = this._likes.some((like) => like._id == this._userId);
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
    this._likeCount = this._element.querySelector(".elements__counter");
    this._deleteButton = this._element.querySelector('.elements__delete')
    this._setEventListeners();
    this._checkCardId();
    // this.countLike();
    // this.isLiked();
    this.likeStatus();
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._elementTitle.textContent = this._name;
    return this._element
  }


// метод удаления карточки
deleteCardHandler() {
  this._element.remove();
  this._element = null;
};

//чтобы узнать какие карточки мои, а какие нет
_checkCardId() {
  if(this._ownerId !== this._userId) {
    this._deleteButton.classList.add('elements__delete_hidden')
  }
  else {
    this._deleteButton.classList.remove('elements__delete_hidden')
  }
}

// _toggleLikeHandler() {
//   this._like.classList.toggle('elements__like_active');
// };

// это показывает, что у меня пролайкано!!!
isLiked() {
  return this._isLiked
}

//поставить лайк
addLikeHandler() {
  this._like.classList.add('elements__like_active');
  this._likeCount.textContent = this._likes.length;
  this._isLiked = true;
};

//убрать лайк
deleteLikeHandler() {
  this._like.classList.remove('elements__like_active');
  this._likeCount.textContent = this._likes.length;
  this._isLiked = false;
};



//состояние кнопки лайка
likeStatus() {
  // if(this._like.classList.contains('elements__like_active')) {
  if(this._isLiked) {
    // this.deleteLikeHandler()
    this.addLikeHandler()
  }

  else {
    // this.addLikeHandler()
    this.deleteLikeHandler()
  }
}


//счетчик
countLike(item) {
    this._likes = item
    this._likeCount.textContent = this._likes.length;
  // this._likes = item;
  // this._likes = item.likes;
  // this.numberLike = this._like.classList.contains('elements__like_active') ? 1 : 0;
  // this._likeCount.textContent = this._likes.length + this.numberLike;
}

// слушатели
_setEventListeners () {
  // this._like.addEventListener('click', () => {this._toggleLikeHandler()});
  this._like.addEventListener('click', () => {this._likeCardClick(this._cardId)});
  // this._element.querySelector('.elements__delete').addEventListener('click', () => {this.deleteCardHandler()});
  this._deleteButton.addEventListener('click', () => {this._deleteCardIconClick(this._cardId)});
  this._elementImg.addEventListener('click', () => {this._imageHandler(this._element)});
  }
}

export {Card};
