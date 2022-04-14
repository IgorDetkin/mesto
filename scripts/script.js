let editButton = document.querySelector('.profile__edit');
let editPopup = document.querySelector('.popup');
let exitButton = document.querySelector('.popup__exit');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name_input_name');
let jobInput = document.querySelector('.popup__name_input_about');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

function openPopup() {
  editPopup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  editPopup.classList.remove('popup_opened');
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);




