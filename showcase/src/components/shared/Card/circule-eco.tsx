import React, { useEffect, useState } from "react";

interface ICirculeEco {
    img: string
    onClick?: any,    
}

const CirculeEco: React.FC<ICirculeEco> = ({img, onClick}) => {

    return (
       <div className="container-circule-eco" onClick={onClick}>
            <img src={img  ? img : "image/Logo.png"} alt="Circule Eco" />
        </div>

    )
}

export default CirculeEco;