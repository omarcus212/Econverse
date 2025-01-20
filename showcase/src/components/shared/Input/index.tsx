import React, { useEffect, useState } from "react";

interface IButton {
    type:string,
    placeholder?: string,
    icon?:string,
    ClassName?: string,
    ClassNameicon?: string,
    onClick?: any,    
}

const Input: React.FC<IButton> = ({type, placeholder, icon, ClassName, ClassNameicon, onClick}) => {

    return (
       <div className={ClassName? ClassName : "default-input" }>
            <input type={type} placeholder={placeholder} />
            <button className={ClassNameicon? ClassNameicon : "default-input-icon"} onClick={onClick}>
                 <img src={icon?icon:""} alt={icon?"carregando icon":""} />
            </button>
        </div>
    )
}

export default Input;