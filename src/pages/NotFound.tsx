import React from 'react';
import {useNavigate} from "react-router-dom";
import image from '../assets/404.jpg'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='nomatch'>
            <img src={image} alt="" />
            <button className='full__button' onClick={() => navigate('/')}>Вернуться назад</button>
        </div>
    );
};

export default NotFound;