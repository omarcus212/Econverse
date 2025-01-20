import React, { useEffect, useState } from "react";
import Button from "../Button";

export interface IBannerCard{
    label:string,
    description:string,
    ClassName?:string,
    ClassNameTexts?:string,
    styleButton?:string
}

const BannerCard: React.FC<IBannerCard> = ({label, ClassName, ClassNameTexts, styleButton,  description}) => {

    return (
       <div className={ClassName?ClassName:"container-banner-card"}>
            <div className="banner-card">
                <strong className={ClassNameTexts?ClassNameTexts:"main-text"}>{label}</strong>
                <p className="info-text">{description}</p>
                 <Button text="Confira" ClassName={styleButton?styleButton:"btn-checkout"} onClick={()=>{}}/>
            </div>
        </div>
    )
}

export default BannerCard;