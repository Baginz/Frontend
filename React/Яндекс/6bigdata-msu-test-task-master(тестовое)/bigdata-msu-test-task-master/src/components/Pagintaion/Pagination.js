import './Pagination.css';

function Pagination({ moviesPerPage, totalMovies, paginate }) {
  const pageNumbers = []
  
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div  className='pagination'>
      <ul className='pagination__list'>
        {
          pageNumbers.map(number => (
            <li 
              className='pagination__list-item'
              key={number}>
              <button onClick={()=> paginate(number)} className='pagination__number'>{number}</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Pagination;