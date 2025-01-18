import React, { useEffect, useState } from "react";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import CardProduct from "../components/shared/Card/product";
import BannerCard from "../components/shared/Card/banner-card";
import CirculeEco from "../components/shared/Card/circule-eco";
import IconCard from "../components/shared/Card/icon-card";
import ImgIcon from "../components/shared/IconLogo/Icon";


const Teste: React.FC = () => {

    return (
        <div>
         <Input type="search" placeholder="O que você está buscando?" icon="icons/search.png" ClassNameicon="search-icon" ClassName="search-container"/>
         <Button text="comprar" ClassName=""/>
         <CardProduct/>
         <BannerCard/>
         <CirculeEco img="image/logo.png" onClick={()=>{}}/>
         <IconCard text="hello world" imgIcon="svg/truck.svg" ClassName="container-icon-card"/>
         <ImgIcon img="svg/truck.svg" className=""/>
        </div>
    )
}

export default Teste;