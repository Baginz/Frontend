import './Table.css';
import TableRow from '../TableRow/TableRow';

function Table({movies, setIsVisiblePopup, setCurrentIdMovie, hadleDeleteCommentButton, hadleAddCommentButton}) {

  return (
    <table className='table'>
      <thead className='table__head'>
      <TableRow 
        id='id'
        urlPoster='poster'
        title='title'
        year='year'
        rating='rating'
        runtime='runtime'
        defaultComment='comment'
      />
      </thead>
      <tbody className='table__body'>
        {
          movies.map(dataMovie => 
            <TableRow
              key={dataMovie.id}
              id={dataMovie.id}
              urlPoster={dataMovie.medium_cover_image}
              title={dataMovie.title}
              year={dataMovie.year}
              rating={dataMovie.rating}
              runtime={dataMovie.runtime}
              comment={dataMovie.comment}
              setIsVisiblePopup={setIsVisiblePopup}
              setCurrentIdMovie={setCurrentIdMovie}
              hadleDeleteCommentButton={hadleDeleteCommentButton}
              hadleAddCommentButton={hadleAddCommentButton}
              />
          )
        }
      </tbody>
    </table>
  );
}

export default Table;