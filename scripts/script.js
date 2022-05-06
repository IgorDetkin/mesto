// попап редактирования  и сохранения данных профиля
const editButton = document.querySelector('.profile__edit');
const editPopup = document.querySelector('.popup');
const exitButton = document.querySelector('.popup__exit');
const editFormElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__name_input_name');
const jobInput = document.querySelector('.popup__name_input_about');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

// переменные для карточек
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elements-template').content;

// переменные для попапа полного экрана картинкок
const imgPopupImg = document.querySelector('.popup-image__img');
const imgPopupName = document.querySelector('.popup-image__title');
const imgPopup = document.querySelector('.popup-image');
const imgExitButton = document.querySelector('.popup-image__exit')

// переменные для попапа добавления карточек пользователем
const addPopup = document.querySelector('#popup-add');
const addButton = document.querySelector('.profile__add');
const addFormElement = document.querySelector('.popup__form_add');
const addNameInput = document.querySelector('.popup__name_input_term');
const addLinkInput = document.querySelector('.popup__name_input_link');
const addExitButton = document.querySelector('.popup__exit_add');
const addSaveButton = document.querySelector('.popup__save_add');






function openPopup() {
  editPopup.classList.add('popup_opened');
}

function closePopup() {
  editPopup.classList.remove('popup_opened');
}

function openPopupEdit() {
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
openPopup(editPopup);
}

function editFormSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

// функции для слушателей карточек
function toggleLikeHandler(event) {
  event.target.classList.toggle('elements__like_active');
};

function deleteCardHandler(event) {
const deleteCard = event.target.closest('.elements__card');
deleteCard.remove();
};

function openViewStartImg(elementPlace) {
imgPopupImg.src = elementPlace.querySelector('.elements__img').src;
imgPopupImg.alt = elementPlace.querySelector('.elements__img').alt;
imgPopupName.textContent = elementPlace.querySelector('.elements__title').textContent;
imgPopup.classList.add('popup-image_opened');
}

function closeViewImgPopup (event) {
imgPopup.classList.remove('popup-image_opened');
}

function openAddPopup() {
  addPopup.classList.add('popup_opened');
  addFormElement.reset();
}

function closeAddPopup() {
  addPopup.classList.remove('popup_opened');
}

// добавление первых 6 карточек при загрузке страницы и возможности лайкания, удаления, раскрытия их
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

// функция создания карточки
function createCard(name, link) {
  const elementPlace = elementTemplate.querySelector('.elements__card').cloneNode(true);

  elementPlace.querySelector('.elements__img').src = link;
  elementPlace.querySelector('.elements__img').alt = name;
  elementPlace.querySelector('.elements__title').textContent = name;

  // поставить, снять лайк
  elementPlace.querySelector('.elements__like').addEventListener('click', toggleLikeHandler);

  // удалить карточку
  elementPlace.querySelector('.elements__delete').addEventListener('click', deleteCardHandler);

  // раскрытие на весь экран
  elementPlace.querySelector('.elements__img').addEventListener('click', function () {openViewStartImg(elementPlace)});

  // закрытие раскрытия на весь экран
  imgExitButton.addEventListener('click', closeViewImgPopup);

  //возвращается созданная карточка
  return elementPlace;
  }


// функция,  перебирающая элементы из массива и добавляющая их в DOM
initialCards.forEach(function(item) {
  elementsContainer.append(createCard(item.name, item.link));
});

// функция, чтобы карточки мог добавить полбзователь в DOM
function addImage (event) {
    event.preventDefault()
    elementsContainer.prepend(createCard(addNameInput.value, addLinkInput.value));
    closeAddPopup();
  }


// слушатели для открытия, закрытия и редактирования профиля пользователя
editButton.addEventListener('click', openPopupEdit);
exitButton.addEventListener('click', closePopup);
editFormElement.addEventListener('submit', editFormSubmitHandler);


// слушатели для открытия, закрытия добавления новых карточек пользователем
addButton.addEventListener('click', openAddPopup);
addExitButton.addEventListener('click', closeAddPopup) ;
addFormElement.addEventListener('submit', addImage);
