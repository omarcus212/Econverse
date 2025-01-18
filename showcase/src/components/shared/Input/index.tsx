import React, { useEffect, useState } from "react";

interface IButton {
    type:string,
    placeholder: string,
    icon:string,
    ClassName: string,
    ClassNameicon: string,
    onClick?: any,    
}

const Input: React.FC<IButton> = ({type, placeholder, icon, ClassName, ClassNameicon, onClick}) => {

    return (
       <div className={ClassName}>
            <input type={type} placeholder={placeholder} />
            <button className={ClassNameicon} onClick={onClick}>
                 <img src={icon} alt="carregando icon" />
            </button>
        </div>
    )
}

export default Input;