export class Api {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  }
//  Проверка успешного запроса
  _checkStatus(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка, код ${res.status}`);
  }

  // Запрос данных каточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(res => {
        return this._checkStatus(res);
        });
  }

  // Запрос данных пользователей с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(res => {
        return this._checkStatus(res);
        });
  }

  // Передача данных пользователя на сервер
  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => {
        return this._checkStatus(res);
        });
  }

  // передача новой аватарки на сервер
  setAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(res => {
        return this._checkStatus(res);
        });
  }


  // Добавление карточки
  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      credentials: this._credentials,
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
    })
      .then(res => {
        return this._checkStatus(res);
      });
  }

  // Удаление карточки
  removeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(res => {
        return this._checkStatus(res);
      });
  }

// Установка и снятие лайка
toggleLike(id, isLike) {
  if(!isLike) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
      credentials: this._credentials,
    }).then(res => {
      return this._checkStatus(res);
    });
  } else {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: this._credentials,
    } ).then(res => {
      return this._checkStatus(res);
    });
  }
  }
}

export const api = new Api({
  // baseUrl: "http://localhost:3000",
  baseUrl: "https://api.mestodkey47.nomoreparties.sbs",
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: "include",
});






