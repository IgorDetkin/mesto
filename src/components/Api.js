import { data } from "autoprefixer";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }




   //Загрузка информации о пользователе с сервера
   getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
};



  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  };




  editUserProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        // name: 'Буйвол',
        // about: 'тещаааа'
        name: data.name,
        about: data.about
    })
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }


addNewCard(data) {
  return fetch(`${this._baseUrl}/cards`, {
    headers: this._headers,
    method: 'POST',
    body: JSON.stringify({
      name: data.name,
      link: data.link
      // name: 'Тещаааа',
      // link: 'https://img.pac.ru/resorts/213123/185354/big/4C93B02D7F0001017EF5149798A2045D.jpg'
  })
})
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}





deleteCard(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}`,
  {headers: this._headers,
    method: 'DELETE',
    // body: JSON.stringify({
      // _id: cardId
  // })
  })

  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}


likeCard(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}/likes`,
  {headers: this._headers,
    method: 'PUT',
  })

  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}


deleteLikeCard(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}/likes`,
  {headers: this._headers,
    method: 'DELETE',
  })

  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}


editProfileAvatar(data) {
  return fetch(`${this._baseUrl}/users/me/avatar`,
  {method: 'PATCH',
  headers: this._headers,
  body: JSON.stringify({
    avatar: data.avatar
      // avatar: 'https://varlamov.me/2018/murmansk_komfortniy_pizdec/16.jpg'
      // avatar: 'https://static.life.ru/posts/2018/03/1103416/b6fb5cbc0f37655a17e8052dc345f64f.jpg'

    })
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}



  // другие методы работы с API
}

export {Api};






