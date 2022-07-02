class Api {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {headers: this._headers})
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
  baseUrl: 'https://yts.mx/api/v2/list_movies.json',
  headers: {
    // If necessary, write headers here
  }
}); 

export default api;