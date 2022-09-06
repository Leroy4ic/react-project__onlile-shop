import React from 'react';
import PropTypes from 'prop-types';
import Phone from '../../img/phone.svg';
import Logo from '../../img/logo.svg';
import Basket from '../../img/basket.svg';

import HeaderStyles from '../Styles/Header.scss'

const Header = props => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={Logo}></img>
            </div>
            <div className='header-links'>
                <a href='#'>Главная</a>
                <a href='#'>Магазин</a>
                <a href='#'>О бренде</a>
                <a href='#'>Контакты</a>
            </div>

            <div className='phone'>
                <img src={Phone} alt='phone'></img>
                <p>+38099999999</p>
                <img src={Basket} alt='basket'></img>
            </div>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;