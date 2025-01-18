import React, { useEffect, useState } from "react";

interface IButton {
    text: string,
    ClassName: string,
    onClick?: any,    
}

const Button: React.FC<IButton> = ({text, ClassName, onClick}) => {

    return (
       <button className={ClassName ? ClassName: "default"} onClick={onClick}>{text}</button>
    )
}

export default Button;