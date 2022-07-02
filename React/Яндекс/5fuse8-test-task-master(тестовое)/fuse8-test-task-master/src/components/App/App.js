import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Api from '../../utils/Api';
import { Route } from 'react-router-dom';

function App() {
  const [cards, setCards] = React.useState([]);
  const [renderedCards, setRenderedCards] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  
  // Getting card from backend for render
  React.useEffect(() => {
    Api.getCard().then(cardList => {
      setCards(cardList)
      setRenderedCards(cardList.slice(0, 6))
    })
  }, []);

  return (
    <div className="page">
      <Route exact path='/'>
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Main
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          cards={cards}
          setCards={setCards}
          renderedCards={renderedCards}
          setRenderedCards={setRenderedCards}
        />
      </Route>
      <Route exact path='/details/:id'>
        <h1>There should be a description of the card house</h1>
      </Route>
    </div>
  );
}

export default App;
