import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

import './index.scss';
import Logo from './Logo';

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            'service_7opka1a',
            'template_5c8qiut',
            refForm.current,
            {publicKey: "9jmnjhYGaIbjZ0Dve"}
        )
        .then(
            () => {
                alert('Message sucessfully sent!');
            },
            () => {
                alert('Message failed to send!, please try again.');
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>
                        I am interested in working on new projects and collaborations. If you have a project in mind, or just want to say hi, feel free to send me an email at
                    </p>
                
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>

                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>

                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>

                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <Logo />
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact;