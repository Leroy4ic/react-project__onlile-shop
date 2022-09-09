import React from 'react';
import Icons from './sprites.svg'

const Icon = ({ name, color, size }) => {
    return (
        <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
            <use xlinkHref={`${Icons}#icon-${name}`} x="1" y="1"/>
        </svg>
    );
};

export default Icon;