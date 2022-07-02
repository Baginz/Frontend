import './Header.css';
import Filter from '../Filter/Filter';

function Header({searchValue, setSearchValue}) {
  return (
    <div className="header">
      <h1 className="header__title">Our Latest Developments</h1>
      <Filter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
}

export default Header;