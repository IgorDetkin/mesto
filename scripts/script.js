// попап редактирования  и сохранения данных профиля
const editButton = document.querySelector('.profile__edit');
const anyPopup = document.querySelector('.popup');
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
const imgPopupImg = document.querySelector('.popup__image-img');
const imgPopupName = document.querySelector('.popup__image-title');
const imgPopup = document.querySelector('#popup-image');
const imgExitButton = document.querySelector('.popup__exit_img')

// переменные для попапа добавления карточек пользователем
const addPopup = document.querySelector('#popup-add');
const addButton = document.querySelector('.profile__add');
const addFormElement = document.querySelector('.popup__form_add');
const addNameInput = document.querySelector('.popup__name_input_term');
const addLinkInput = document.querySelector('.popup__name_input_link');
const addExitButton = document.querySelector('.popup__exit_add');
const addSaveButton = document.querySelector('.popup__save_add');


// функция открытия любого попапа
function openPopup(anyPopup) {
  anyPopup.classList.add('popup_opened');
}

// функция закрытия любого попапа
function closePopup(anyPopup) {
  anyPopup.classList.remove('popup_opened');
}

// функция открытия попапа с уже находящимися внутри данными
function openPopupEdit() {
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
openPopup(anyPopup);
}

// функция изменеия данных в попапе и закрытия после сохранения
function editFormSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(anyPopup);
}

// функции для слушателей лайка карточки
function toggleLikeHandler(event) {
  event.target.classList.toggle('elements__like_active');
};

// функция для слушателей удаления карточки
function deleteCardHandler(event) {
const deleteCard = event.target.closest('.elements__card');
deleteCard.remove();
};

// функция связывания данных из карточки в попап раскрытия на весь экран и открытие этого попапа
function viewImg(elementPlace) {
imgPopupImg.src = elementPlace.querySelector('.elements__img').src;
imgPopupImg.alt = elementPlace.querySelector('.elements__img').alt;
imgPopupName.textContent = elementPlace.querySelector('.elements__title').textContent;
openPopup(imgPopup);
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
  elementPlace.querySelector('.elements__img').addEventListener('click', function () {viewImg(elementPlace)});

  //возвращается созданная карточка
  return elementPlace;
  }

// функция,  перебирающая элементы из массива и добавляющая их в DOM
initialCards.forEach(function(item) {
  elementsContainer.append(createCard(item.name, item.link));
});

// функция, чтобы карточки мог добавить пользователь в DOM
function addCard (event) {
    event.preventDefault()
    elementsContainer.prepend(createCard(addNameInput.value, addLinkInput.value));
    closePopup(addPopup);
    addFormElement.reset();
  }

// слушатели для открытия, закрытия и редактирования профиля пользователя
editButton.addEventListener('click', openPopupEdit);
exitButton.addEventListener('click', function () {closePopup(anyPopup)});
editFormElement.addEventListener('submit', editFormSubmitHandler);

// слушатели для открытия, закрытия добавления новых карточек пользователем
addButton.addEventListener('click', function () {openPopup(addPopup)});
addExitButton.addEventListener('click', function () {closePopup(addPopup)});
addFormElement.addEventListener('submit', addCard);

// закрытие карточки на весь экран
imgExitButton.addEventListener('click', function () {closePopup(imgPopup)});
