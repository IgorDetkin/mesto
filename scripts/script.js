// попап редактирования  и сохранения данных профиля
const editButton = document.querySelector('.profile__edit');
const editPopup = document.querySelector('.popup');
const exitButton = document.querySelector('.popup__exit');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__name_input_name');
const jobInput = document.querySelector('.popup__name_input_about');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

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

// попап добавления новых карточек и лайкания их
const addPopup = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add');
const addFormElement = document.querySelector('.popup__form_add');
const addNameInput = document.querySelector('.popup__name_input_term');
const addLinkInput = document.querySelector('.popup__name_input_link');
const addExitButton = document.querySelector('.popup__exit_add');
const addSaveButton = document.querySelector('.popup__save_add');

function openAddPopup() {
  addPopup.classList.add('popup-add_opened');
  addNameInput.value = "";
  addLinkInput.value = "";
}

function closeAddPopup() {
  addPopup.classList.remove('popup-add_opened');
}

function addImage (event) {
  event.preventDefault()
  const elementPlace = elementTemplate.querySelector('.elements__card').cloneNode(true);
  elementPlace.querySelector('.elements__img').src = addLinkInput.value;
  elementPlace.querySelector('.elements__img').alt = addNameInput.value;
  elementPlace.querySelector('.elements__title').textContent = addNameInput.value;
  elementPlace.querySelector('.elements__like').addEventListener('click', function(event) {
    event.target.classList.toggle('elements__like_active');
  });

  elementPlace.querySelector('.elements__delete').addEventListener('click', function(event) {
    const deleteCard = event.target.closest('.elements__card');
    deleteCard.remove();
  });

// раскрытие на весь экран
const imgPopupImg = document.querySelector('.popup-image__img');
const imgPopupName = document.querySelector('.popup-image__title');
const imgPopup = document.querySelector('.popup-image')
elementPlace.querySelector('.elements__img').addEventListener('click', function(){
  imgPopupImg.src = elementPlace.querySelector('.elements__img').src;
  imgPopupName.textContent = elementPlace.querySelector('.elements__title').textContent;
  imgPopup.classList.toggle('popup-image_opened');
});

// закрытие раскрытия на весь экран
const imgExitButton = document.querySelector('.popup-image__exit')
imgExitButton.addEventListener('click', function() {
  imgPopup.classList.remove('popup-image_opened');
});

  elements.prepend(elementPlace);
  closeAddPopup();
}

addButton.addEventListener('click', openAddPopup);
addExitButton.addEventListener('click', closeAddPopup) ;
addFormElement.addEventListener('submit', addImage);

// добавление первых 6 карточек при загрузке страницы и возможности лайкания их
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

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elements-template').content;


initialCards.forEach(function(item) {
const elementPlace = elementTemplate.querySelector('.elements__card').cloneNode(true);

elementPlace.querySelector('.elements__img').src = item.link
elementPlace.querySelector('.elements__title').textContent = item.name;
elementPlace.querySelector('.elements__like').addEventListener('click', function(event) {
  event.target.classList.toggle('elements__like_active');
});

elementPlace.querySelector('.elements__delete').addEventListener('click', function(event) {
  const deleteCard = event.target.closest('.elements__card');
  deleteCard.remove();
});

// раскрытие на весь экран
const imgPopupImg = document.querySelector('.popup-image__img');
const imgPopupName = document.querySelector('.popup-image__title');
const imgPopup = document.querySelector('.popup-image')
elementPlace.querySelector('.elements__img').addEventListener('click', function(){
  imgPopupImg.src = item.link;
  imgPopupName.textContent = item.name;
  imgPopup.classList.toggle('popup-image_opened');
});

// закрытие раскрытия на весь экран
const imgExitButton = document.querySelector('.popup-image__exit')
imgExitButton.addEventListener('click', function() {
  imgPopup.classList.remove('popup-image_opened');
});

elements.append(elementPlace);
});
