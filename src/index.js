
import {Card} from './components/Card.js';
import {FormValidator} from './components/FormValidator.js';
import {Section} from './components/Section.js';
// import {Popup} from '../Popup.js';
import {PopupWithImage} from './components/PopupWithImage.js';
import {PopupWithForm} from './components/PopupWithForm.js';
import {UserInfo} from './components/UserInfo.js';
import {initialCards, validationSetup} from './utils/data.js';
import {buttonEdit, formElementEdit, nameInput, jobInput,
  elementsContainer, buttonAdd, formElementAdd, buttonEditAvatar } from './utils/constants.js';
import {PopupWithFormDelete} from './components/PopupWithFormDelete.js';
import './index.css';
import {Api} from './components/Api.js'

const newApi = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: '12ba528d-ad1d-413e-9351-d51fd8b2894d',
    'Content-Type': 'application/json'
  }
});

let userId = null;

//так мы получаем данные с сервера о пользователе
newApi.getUserInfo()
  .then((data) => {
    userId = data._id;
    newEditUserInfo.setUserInfo(data.name, data.about);
    newEditUserInfo.editAvatar(data.avatar);
  })
  .catch((err) => {
    console.log(`${err}`);
  })


// открытие попапа с уже существующими данными
function openPopupEdit() {
  const data = newEditUserInfo.getUserInfo();
  nameInput.value = data.name
  jobInput.value = data.about;
  // linkInputAvatar.value = data.avatar;
  validateFormProfile.resetError();
  // openPopup(popupEdit);
  newPopupEdit.open();
  }


// создание любой карточки
 function createCard(data) {
  const newCard = new Card(
    data,
    '#elements-template',
    () => {newPopupImg.open(data.name, data.link)},
    userId,
    deleteCardIconClick,

    (item) => {
      if(newCard.isLiked()) {
      newApi.deleteLikeCard(item)
      .then((item) => {
        newCard.deleteLikeHandler();
        newCard.countLike(item.likes);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      }
      else {
      newApi.likeCard(item)
      .then((item) => {
        newCard.addLikeHandler();
        newCard.countLike(item.likes);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      }

    }

  )
  return newCard.generateCard(data);
}


// удаление своих карточек
function deleteCardIconClick(item) {
  newPopupWithFormDelete.open();
  newPopupWithFormDelete.setSubmitAction(() => {
    // debugger;
    newApi.deleteCard(item)
    .then(() => {
      this.deleteCardHandler();
      newPopupWithFormDelete.close();
      })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      })
    });
  };
// // удаление карточки работающее без серверной части
// function deleteMyCard() {
//   newPopupWithFormDelete.open();
//   newPopupWithFormDelete.setSubmitAction(() => {
//     this.deleteCardHandler(this);
//     newPopupWithFormDelete.close();
//     });
//   };

// // сабмит формы изменения данных пользователя без серверной части. name и about - имена инпутов(см. в html)
// const editFormSubmitHandler = (data) => {
//   const { name, about } = data;
//   newEditUserInfo.setUserInfo(name, about);
//   newPopupEdit.close();
// };


// АВАТАР!!!!!!
   const avatarFormSubmitHandler = (data) => {
    newPopupAvatar.loadingButton(true);
    newApi.editProfileAvatar({
      avatar: data.avatarLink
    })
    .then(() => {
    newEditUserInfo.editAvatar(data.avatarLink);
    newPopupAvatar.close()
    // console.dir(data.avatarLink)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() =>{
      newPopupAvatar.loadingButton(false)
    })
  }


const addCard = (data) => {
  newApi.addNewCard({
      name: data.name,
      link: data.link
  })
  .then ((data) => {
    newSection.setItem(createCard(data));
    newPopupAddCard.close();
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })
}


// отрисовка элементов на странице
const newSection = new Section(
  { //items: [],
    renderer: (data) => {
      newSection.setItemServer(createCard(data))}
  },
  '.elements'
  );


// вызов метода класса в котором происходит перебор, внутри которого есть функция createcard
newApi.getInitialCards()
.then((data)  => {
  newSection.renderItems(data);
  })
.catch((err) => {
  console.log(`Ошибка: ${err}`);
  })


// создание экземпляра отвечающего за отображение информации о пользователе на странице
const newEditUserInfo = new UserInfo ({
  nameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle',
  avatarSelector: '.profile__image'
});


// сабмит формы изменения имени
const editFormSubmitHandler = (data) => {
  newPopupEdit.loadingButton(true); //
  const { name, about } = data;
  newApi.editUserProfile({
    name: data.name,
    about: data.about
})
.then(() => {
  newEditUserInfo.setUserInfo(name, about);
  newPopupEdit.close();
})
.catch((err) => {
  console.log(`${err}`);
})
.finally(() =>{
  newPopupEdit.loadingButton(false)
})
};


// создание нового экзмепляра класса валидации для формы ред.пользователя
const validateFormProfile = new FormValidator(validationSetup, formElementEdit);
validateFormProfile.enableValidation();

// создание нового экземпляра класса валидации для формы добавления карточки.
const validateFormCard = new FormValidator(validationSetup, formElementAdd);
validateFormCard.enableValidation();


const newPopupEdit = new PopupWithForm('#popup-edit', editFormSubmitHandler);
const newPopupAddCard = new PopupWithForm('#popup-add', addCard);
const newPopupImg = new PopupWithImage('#popup-image');
const newPopupWithFormDelete = new PopupWithFormDelete('#popup-delete');
const newPopupAvatar = new PopupWithForm('#popup-edit-avatar', avatarFormSubmitHandler);


newPopupEdit.setEventListeners();
newPopupAddCard.setEventListeners();
newPopupImg.setEventListeners();
newPopupWithFormDelete.setEventListeners();
newPopupAvatar.setEventListeners();


buttonEdit.addEventListener('click', openPopupEdit);
buttonAdd.addEventListener('click', function () {
    newPopupAddCard.open();
    validateFormCard.resetError();
});
buttonEditAvatar.addEventListener('click', function () {
  newPopupAvatar.open();
});

// console.log(newApi.getInitialCards())
