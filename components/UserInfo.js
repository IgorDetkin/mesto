class UserInfo {
  constructor({nameSelector, aboutSelector}) {
    this._name = document.querySelector(nameSelector); //profileName = document.querySelector('.profile__title');
    this._about = document.querySelector(aboutSelector); //profileJob = document.querySelector('.profile__subtitle');
  }

  getUserInfo () {
    return {
      name: this._name.textContent,
      about: this._about.textContent
     };
  };

  setUserInfo(userName, userAbout) {
    this._name.textContent = userName;
    this._about.textContent = userAbout;
     };
  }

  export {UserInfo};
