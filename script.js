let editButton = document.querySelector('.profile__edit');
let editPopup = document.querySelector('.popup');

function openPopup() {
  editPopup.classList.add('popup_opened');

};

editButton.addEventListener('click', openPopup);





let exitButton = document.querySelector('.popup-container__exit');

function closePopup() {
  editPopup.classList.remove('popup_opened');

}

exitButton.addEventListener('click', closePopup);




let formElement = document.querySelector('.popup-container');

let nameInput = document.querySelector('.popup-container__name');
let jobInput = document.querySelector('.popup-container__about');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                              // Так мы можем определить свою логику отправки.
                                              // О том, как это делать, расскажем позже.


  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

