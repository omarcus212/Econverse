import React, { useEffect, useState } from "react";
import Button from "../Button";
import products from "../../../type/produtcs";

export interface IProps{
    product: products,
    onBuyClick: () => void;
}


const CardProduct: React.FC<IProps> = ({product, onBuyClick}) => {

    return (
        <div className="container-card">

            <div className="card">
            <img src={product.photo}/>
            <p className="desc-product-text">{product.productName}.</p>
            <strong className="price-text">R$ {product.price}</strong>
            <p className="oft-text">ou 2x de {product.price/2} sem juros</p>
            <strong className="free-shipping">Frete grátis</strong>
            <Button ClassName="btn-buy" text="Comprar" onClick={onBuyClick}/>
            </div>
          
        </div>
    )
}

export default CardProduct;