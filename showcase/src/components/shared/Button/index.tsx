/* eslint-disable jsx-a11y/alt-text */
import React from "react";

interface IButton {
    text?: string,
    ClassName?: string,
    onClick?: any,    
    img?:string
}

const Button: React.FC<IButton> = ({text, img, ClassName, onClick}) => {

    return (
       <button className={ClassName ? ClassName: "default-button"} onClick={onClick}>
        {text}
        <img src={img} style={{display: img ? "flex" : "none"}}/>
        </button>
    )
}

export default Button;