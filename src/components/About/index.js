import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import flutterSVG from '../../assets/svgs/icons8-flutter-96.svg'
import pythonSVG from '../../assets/svgs/python-svg.svg'
import { Link } from 'react-router-dom';
function About(){
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a passionate web and app developer with a deep love for building and creating new things. My reliability and confidence in my skills drive me to find innovative solutions to problems, and I'm persistent in seeking answers while also knowing when it's best to move on. Coding isn't just a job for me—it's a passion that I eagerly dive into every day.
                    </p>
                    <p>
                        When I'm not coding, you can find me enjoying my favorite music or trying out different sports. I also love working out and going for runs. My enthusiasm for fitness and music keeps me balanced and energized, ready to tackle any challenge that comes my way. Let's create something amazing together!
                    </p>
                    {/* <p>
                        If I need to define myself in one sentence that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!
                    </p> */}

                    <Link to='/mywork' className='flat-button'>View My Work</Link>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJsSquare}  color="#EFD81D"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5}  color="#F06529"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3}  color="#28A4D9"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact}  color="#5ED4F4"/>
                        </div>
                        <div className='face5'>
                            <img src={flutterSVG} alt='flutter' />
                        </div>
                        <div className='face6'>
                            <img src={pythonSVG} alt='python' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;