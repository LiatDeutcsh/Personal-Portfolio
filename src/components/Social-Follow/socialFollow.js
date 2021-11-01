import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faFreeCodeCamp, faGoogle, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import "./socialFollowStyle.css";

export default function SocialFollow() {
    return (
        <div className='social-container'>
            <h3 className='social-title'>Reach me here</h3>
            <a href='https://github.com/LiatDeutcsh'
            className='github social'
            target="_blank"
            rel='noopener noreferrer'
            >
             <FontAwesomeIcon icon={faGithub} size='2x' /> 
            </a>

            <a href='https://www.linkedin.com/in/liat-deutcsh-352050163/'
            className='linkedin social'
            target="_blank"
            rel='noopener noreferrer'
            >
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>

            <a href='https://www.freecodecamp.org/fcc8b63b5de-9150-4dae-9a0d-1a2e4fee0d13'
            className='freecodecamp social'
            target="_blank"
            rel='noopener noreferrer'
            >
             <FontAwesomeIcon icon={faFreeCodeCamp} size='2x' />
            </a>

            <a href='mailto:Liat.Chen0@gmail.com'
            className='google social'
            target="_blank"
            rel='noopener noreferrer'
            >
             <FontAwesomeIcon icon={faGoogle} size='2x' />
            </a>

            <a href='https://wa.me/972544919242'
            className='whatsapp social'
            target="_blank"
            rel='noopener noreferrer'
            >
             <FontAwesomeIcon icon={faWhatsapp} size='2x' />
            </a>


        </div>
    );
}

            
             