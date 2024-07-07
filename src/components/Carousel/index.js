import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import React, {useState, useEffect} from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Carousel(props) {
    const images = props.images;
    const [currIndex, setCurrIndex] = useState(0);

    function prevSlide (){
        const newIndex = (currIndex - 1 + 2) % 3;
        setCurrIndex(newIndex);
    };

    function nextSlide () {
        const newIndex = (currIndex + 1) % 3;
        setCurrIndex(newIndex);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                    setCurrIndex(prevIndex => { 
                        return((prevIndex + 1) % 3);
                    });
            }, 5000);
            return () => {
                clearInterval(interval);
                clearInterval(timeout);
            };
        }, 3000);

        return () => clearInterval(timeout);
    }, []);

    return (
        <div className='carousel-main'>
            <div  className='carousel-item' key={currIndex}>
                <img key={currIndex} src={images[currIndex]} alt={props.title} />
            </div>
            <div className='button-wrapper'>
                <button onClick={prevSlide} className='icon'>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button onClick={nextSlide} className='icon'>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>

            <div className='carousel-indicators'> 
                <div className={`indicator ${currIndex === 0 ? 'active' : ''}`}></div>
                <div className={`indicator ${currIndex === 1 ? 'active' : ''}`}></div>
                <div className={`indicator ${currIndex === 2 ? 'active' : ''}`}></div>
            </div>
        </div>
    );
}

export default Carousel;