import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import ImgIcon from "../../shared/IconLogo/Icon";



const HeaderHome: React.FC = () => {

    return (
        <header id="HeaderHome">
            <div className="container-header">
             <div className="container-info-top">
                <span className="container-top-textIcon">  
                    <img src={'svg/shieldCheck.svg'} alt="My Icon" width="50" height="50" />
                    <p className="NormalText">Compra <strong className="PurpleText">100% segura</strong></p>
                </span>
                <span className="container-top-textIcon">  
                    <img src={'svg/truck.svg'} alt="My Icon" width="50" height="50" />
                    <p className="NormalText"> <strong className="PurpleText">Frete grátis</strong>  acima de R$ 200 </p>
                </span>  
                <span className="container-top-textIcon">  
                    <img src={'svg/credit-card.svg'} alt="My Icon" width="50" height="50" />
                    <p className="NormalText"> <strong className="PurpleText">Parcele</strong> suas compras </p>
                </span>
            </div>

            <div className="container-logo-search">
                <span className="img-logo"><ImgIcon className="" img="image/logo.png"/></span>
                <span className="container-search"><input/></span>
                <span className="list-icons"><ImgIcon className="" img="svg/ShieldCheck.svg"/></span>
            </div>
                 
             <div className="container-navbar">
               <NavBar/>
             </div>

            </div>
            ac
        </header>
    )
}

export default HeaderHome;