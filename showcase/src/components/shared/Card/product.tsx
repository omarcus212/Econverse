/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Button from "../Button";


const CardProduct: React.FC = () => {

    return (
        <div className="container-card">

            <div className="card">
            <img src="image/celular.png"/>
            <p className="desc-product-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <strong className="price-text">R$ 28,90</strong>
            <p className="oft-text">ou 2x de R$ 49,95 sem juros</p>
            <strong className="free-shipping">Frete grátis</strong>
            <Button ClassName="btn-buy" text="Comprar" onClick={()=>{}}/>
            </div>
          
        </div>
    )
}

export default CardProduct;