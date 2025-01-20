import React, { useEffect, useState } from "react";

interface IIconCard {
    imgIcon: string
    text:string,
    ClassName?:string,
    onClick?: any,    
}

const IconCard: React.FC<IIconCard> = ({imgIcon, onClick, text, ClassName}) => {

    return (
       <div className={ClassName ? ClassName : "default-icon-card"} onClick={onClick}>
            <span className="banner-card">
                <img src={imgIcon} alt="" /> 
            </span>
             <p>{text}</p>
        </div>
    )
}

export default IconCard;