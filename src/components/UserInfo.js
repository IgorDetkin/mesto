// import { buttonEditAvatar } from "../utils/constants";

class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}) {
    this._name = document.querySelector(nameSelector); //profileName = document.querySelector('.profile__title');
    this._about = document.querySelector(aboutSelector); //profileJob = document.querySelector('.profile__subtitle');
    this._avatar = document.querySelector(avatarSelector);
    // this._userId = null;
  }

  getUserInfo () {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar:  this._avatar.src
     };
  };

  setUserInfo(userName, userAbout) {
    this._name.textContent = userName;
    this._about.textContent = userAbout;
    // this._avatar.src = userAvatar;
     };

  editAvatar(userAvatar) {
    this._avatar.src = userAvatar;
  };

}

  export {UserInfo};





