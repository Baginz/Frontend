import './Card.css';
import house from '../../images/test-house-1.jpg';
import { Link } from 'react-router-dom';

function Card({id, type, title, adress, price, sharedInfo}) {
  return (
    <li className="card">
      <Link className="card__link" to={`/details/${id}`}>
        <div className="card__img-wrap">
          <img src={house} className="card__image" alt={title}/>
          <p 
            className={`card__banner card__banner_type_${type === 'IndependentLiving' ? 'indep-live' : 'rest-sup'}`}>
            {type === 'IndependentLiving' ? 'Independent living' : 'Restaurant & Support available'}
          </p>
        </div>
        <p className="card__title">{title}</p>
        <p className="card__adress">{adress}</p>
        <p className="card__price">New Properties for Sale from <b>£{price}</b></p>
        <p className="card__shared-info">{sharedInfo}</p>
      </Link>
    </li>
  );
}

export default Card;