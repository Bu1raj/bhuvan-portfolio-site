import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/B-logo.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
// import Logo from './Logo';
import Loader from 'react-loaders';
import profileImage from '../../assets/images/profile-photo.png';

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['h', 'u', 'v', 'a', 'n', 'r', 'a', 'j']
  const jobArray1 = ['f', 'u', 'l', 'l', ' ', 's', 't', 'a', 'c', 'k'];
  const jobArray2 = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4700)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt='developer' />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br /> 
            <AnimatedLetters letterClass={letterClass} strArray={jobArray1} idx={23} />
            <br /> 
            <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={33} />
          </h1>

          <h2>Full Stack Web Developer / Mobile App Developer </h2>
          <Link to="/contact" className='flat-button'>Contact Me</Link>
        </div>

        <img src={profileImage} alt="profile-photo" className='profile-image' />
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home;