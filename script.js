let editButton = document.querySelector('.profile__edit');
let editPopup = document.querySelector('.popup');

function openPopup() {
  editPopup.classList.add('popup__opened');

};

editButton.addEventListener('click', openPopup);





let exitButton = document.querySelector('.popup-container__exit');

function closePopup() {
  editPopup.classList.remove('popup__opened');

}

exitButton.addEventListener('click', closePopup);




let formElement = document.querySelector('.popup-container');

let nameInput = document.querySelector('.popup-container__name');
let jobInput = document.querySelector('.popup-container__about');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');


function formSubmitHandler (evt) {
  evt.preventDefault();


  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

