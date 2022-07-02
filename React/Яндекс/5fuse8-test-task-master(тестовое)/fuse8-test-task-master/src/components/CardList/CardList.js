import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

function CardList({searchValue, setSearchValue, cards, setCards, renderedCards, setRenderedCards}) {
  const [next, setNext] = React.useState(6);
  const countAddedCards = 3;

  const hadleShowMoreCard = () => {
    loopWithSlice(next, next + countAddedCards)
    setNext(next + countAddedCards)
  }

  const loopWithSlice = (start, end) => {
    const slicedCards = cards.slice(start, end);
    setRenderedCards([...renderedCards, ...slicedCards])
  };

  return (
    <>
    <ul className="card-list">
      {
        renderedCards.filter(card => {
          if (searchValue === "" || searchValue.length < 3) {
            return card;
          } else if (card.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return card;
          }
        })
        .map((card) => 
          <Card 
            key={card.id}
            id={card.id}
            type={card.type}
            title={card.title}
            adress={card.adress}
            price={card.price}
            sharedInfo={'Shared Ownership Available'}
          />
        )
      }
    </ul>
    {renderedCards.length === cards.length ? '' :
      <button className="card-list__button" onClick={hadleShowMoreCard}>
      See more
      <svg className="card-list__icon" width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      </button> 
    }
    
    </>
  );
}

export default CardList;