import React from 'react';
import './TableRow.css';

function TableRow({
    id, 
    urlPoster, 
    title, 
    year, 
    rating, 
    runtime,
    defaultComment, 
    setIsVisiblePopup, 
    comment, 
    setCurrentIdMovie , 
    hadleDeleteCommentButton,
    hadleAddCommentButton
  }) {


  return (
    <tr className='table__body-row'>
      <td className='table__body-cell'>{id}</td>
      <td className='table__body-cell'>
        {urlPoster === 'poster' ? 'poster' : <img className='table__poster' src={urlPoster} alt={title} />}
      </td>
      <td className='table__body-cell'>{title}</td>
      <td className='table__body-cell'>{year}</td>
      <td className='table__body-cell'>{rating}</td>
      <td className='table__body-cell'>{runtime}</td>
      <td className='table__body-cell table__body-cell_type_comment'>
      {defaultComment ? 'comment' : 
        <>
          {comment.length > 0 ? 
            <svg onClick={() => hadleDeleteCommentButton(id)} className='table__icon table__icon_delete' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
            </svg>
            : 
            <svg onClick={() => hadleAddCommentButton(id)} className='table__icon table__icon_add' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#000000">
              <g><rect fill="none" height="24" width="24"/></g>
              <g><g><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/></g></g>
            </svg>
          } 
          
          <p className="table__comment">{comment}</p> 
        </>
      }
      </td>
    </tr>
  );
}

export default TableRow;