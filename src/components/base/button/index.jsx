import React from 'react'
import './style.scss'

function Button({
    text,
    onClick
}) {
    return (
        <button
            className="news-button"
            onClick={onClick}
        >
            <span>{text}</span>
            {/* <img src={buttonImg} alt='' /> */}
        </button>
    );
}

export default Button;
