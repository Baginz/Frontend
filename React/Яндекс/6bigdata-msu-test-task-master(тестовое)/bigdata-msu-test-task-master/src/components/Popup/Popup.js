import './Popup.css';

function Popup({isVisiblePopup, setIsVisiblePopup, valueComment, setValueComment, handleSubmit, currentIdMovie}) {

  function closePopup() {
    setIsVisiblePopup(false)
    setValueComment('');
  }

  function handleChangeInput(e) {
    setValueComment(e.target.value);
  }
  
  return (
    <div className={`popup ${isVisiblePopup ? 'popup_visibility' : ''}`}>
      <form onSubmit={(e) => {
        handleSubmit(e, currentIdMovie)
      }} className='popup__form'>
        <label className='popup__title' htmlFor='comment'>New comment</label>
        <textarea id='comment' className='popup__input' value={valueComment} onChange={handleChangeInput}></textarea>
        <button className='popup__submit' type='submit' >Save comment</button>
      </form>
    <div onClick={closePopup} className='popup__close'></div>
    </div>
  );
}

export default Popup;