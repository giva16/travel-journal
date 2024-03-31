import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl, imageAlt }) => {
  return (
    <article className='card' role='section' aria-label='travel entry'>
      <div className='card-image-container'>
        <img src={imageUrl} className='card-image' alt={imageAlt} />
      </div>
      <div className='card-content'>
        <h2 className='card-title'>{title}</h2>
        <h3 className='card-location'>
          <FontAwesomeIcon className='location-icon' icon={faLocationDot} />
          {location}
          <span className='card-map-link'>
            <a href={googleMapsUrl}>View on Google Maps</a>
          </span>
        </h3>
        <h4 className='card-date'>
          {startDate} - {endDate}
        </h4>
        <p className='card-description'>{description}</p>
      </div>
    </article>
  );
};

export default Card;
