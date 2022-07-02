import React, { Suspense } from 'react';
import './Main.css';
const CardList = React.lazy(() => import('../CardList/CardList'));

function Main({searchValue, setSearchValue, cards, setCards, renderedCards, setRenderedCards}) {
  return (
    <main className="main">
      <Suspense fallback={<div>Waiting...</div>}>
        <CardList
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          cards={cards}
          setCards={setCards}
          renderedCards={renderedCards}
          setRenderedCards={setRenderedCards}
        />
      </Suspense>
    </main>
  );
}

export default Main;