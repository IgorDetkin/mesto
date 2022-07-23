import {Popup} from './Popup.js';

class PopupWithFormDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._deleteButtonYes = this._popup.querySelector('.popup__form-submit')
  }


  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback(this)});
    // this._deleteButtonYes.addEventListener('click', this._handleSubmitCallback);
  }

}

export {PopupWithFormDelete};






// handleDeleteIconClick: (card) => {
//   cardDelSubmit.open(); // открываем попап
//   cardDelSubmit.setSubmitAction(() => { // 'сохраняем' функцию, которую нужно выполнить при сабмите
//     api.removeCard(card.id())  // делаем запрос на сервер
//       .then(() => {
//         card.removeCard(); // удаляем карточку из сетки в случае успеха
//         cardInfoSubmit.close(); // закрываем попап
//       })
//       .catch(обрабатываем ошибку)
//   });
// }
