import React, { useEffect, useState } from "react";
import Button from "../Button";


const BannerCard: React.FC = () => {

    return (
       <div className="container-banner-card">
            <div className="banner-card">
                <strong className="main-text">Parceiros</strong>
                <p className="info-text">Lorem ipsum dolor sit amet, consectetur</p>
                 <Button text="Confira" ClassName="btn-checkout" onClick={()=>{}}/>
            </div>
        </div>
    )
}

export default BannerCard;