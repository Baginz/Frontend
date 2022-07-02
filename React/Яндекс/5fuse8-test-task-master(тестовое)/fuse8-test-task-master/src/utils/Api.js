class Api {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getCard() {
    return fetch(`${this._baseUrl}/homes`, {headers: this._headers})
    .then(response => this._checkRequestResult(response));
  }

  // Parsing JSON on successful request
  _checkRequestResult(response) {
    if (response.ok) {
      return response.json(); 
    }
    return Promise.reject(`Возникла ошибка: ${response.status}`); 
  }
}

// Instantiating class
const api = new Api({
  baseUrl: 'https://603e38c548171b0017b2ecf7.mockapi.io',
  headers: {
    'Content-Type': 'application/json'
  }
}); 

export default api;