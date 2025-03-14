import React, { useEffect, useState } from "react";
import ImgIcon from "../../shared/IconLogo/Icon";
import Input from "../../shared/Input";
import NavBarLink from "../NavBar";



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

                <div className="container-logo-search-icons">

                    <span className="img-logo">
                        <ImgIcon className="" img="image/logo.png"/>
                        </span>

                    <span className="container-search">
                        <Input type="search" placeholder="O que você está buscando?" icon="icon/search.ico" ClassName="search-container" ClassNameicon="search-icon"/>
                        </span>

                    <span className="list-icons">
                        <ImgIcon className="" img="icon/group.ico"/>
                        <ImgIcon className="" img="icon/heart.ico"/>
                        <ImgIcon className="" img="icon/userCircle.ico"/>
                        <ImgIcon className="" img="icon/shoppingCart.ico"/>
                    </span>
                    
                </div> 
                    
                <div className="container-navbar">
                <NavBarLink ClassName="" ClassNameText="" link="" label="Todas Categorias"/>
                <NavBarLink ClassName="" ClassNameText="" link="" label="Supermercado"/>
                <NavBarLink ClassName="" ClassNameText="" link="" label="Livros"/>
                <NavBarLink ClassName="" ClassNameText="" link="" label="Moda"/>
                <NavBarLink ClassName="" ClassNameText="" link="" label="Lançamentos"/>
                <NavBarLink ClassName="" ClassNameText="" link="" label="Ofertas do dia"/>
                <NavBarLink ClassName="" ClassNameText="" link="" icon="icon/CrownSimple.svg" label="Assinatura"/>
                </div>
            </div>
        </header>
    )
}

export default HeaderHome;
