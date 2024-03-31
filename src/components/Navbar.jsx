import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEarth} className='earth' /> Gil's Travel Journal
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
