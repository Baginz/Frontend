import React, { Suspense } from 'react';
import './Main.css';
import '../Table/Table';
import Pagination from '../Pagintaion/Pagination';
const Table = React.lazy(() => import('../Table/Table'));
const Card = React.lazy(() => import('../Card/Card'));

function Main({movies, setIsVisiblePopup, setCurrentIdMovie, hadleDeleteCommentButton}) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [moviesPerPage] = React.useState(4) // You can setting up count of items on page
  const [currentWidth] = React.useState(document.documentElement.clientWidth)

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage
  const currentMovie = movies.slice(firstMovieIndex, lastMovieIndex)
  
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function hadleAddCommentButton(id) {
    setIsVisiblePopup(true)
    setCurrentIdMovie(id)
  }

  return (
    <div className='main'>
      <Suspense fallback={<div>Waiting...</div>}>
        {currentWidth >= 768 ? 
          <Table 
            movies={currentMovie}
            setIsVisiblePopup={setIsVisiblePopup}
            setCurrentIdMovie={setCurrentIdMovie}
            hadleDeleteCommentButton={hadleDeleteCommentButton}
            hadleAddCommentButton={hadleAddCommentButton}
          /> :
          currentMovie.map((dataMovie =>
            <Card
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
          ))
        }
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
          paginate={paginate}
        />
      </Suspense>
    </div>
  );
}

export default Main;