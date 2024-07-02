import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faEye, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import LogoSubtitle from '../../assets/images/B-logo-sub-cropped.png';
import LogoB from '../../assets/images/B-logo.png';
import './index.scss';

function Sidebar() {
  return (
    <div className='nav-bar'>
      <Link className='logo' to="/">
        <img src={LogoB} alt='logo' />
        <img src={LogoSubtitle} alt='Bhuvanraj T' style={{width: 53}}/>
      </Link>

      <nav>
        <NavLink to="/" exact="true">
          <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>

        <NavLink to="/about" exact="true" className="about-link">
          <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>

        <NavLink to="/mywork" exact="true" className="mywork-link">
          <FontAwesomeIcon icon={faEye} color='#4d4d4e'/>
        </NavLink>

        <NavLink to="/contact" exact="true" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
        
      </nav>

      <ul>

        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/Bu1raj'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
          </a>
        </li>

        <li>
          <a target='_blank' rel='noreferrer' href='https://in.linkedin.com/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
          </a>
        </li>

        <li>
          <a target='_blank' rel='noreferrer' href='https://instagram.com'>
            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
          </a>
        </li>

      </ul>
      
    </div>
  )
}

export default Sidebar;