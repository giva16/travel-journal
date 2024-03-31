import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <article className='card' role='section' aria-label='travel entry'>
      <div className='card-image-container'>
        <img src={''} className='card-image' alt={''} />
      </div>
      <div className='card-content'>
        <h2 className='card-country'>
          <FontAwesomeIcon className='location-icon' icon={faLocationDot} />
        </h2>
        <a className='card-map-link'></a>
        <h3 className='card-location'></h3>
        <h4 className='card-date'></h4>
        <p className='card-summary'></p>
      </div>
    </article>
  );
};

export default Card;
