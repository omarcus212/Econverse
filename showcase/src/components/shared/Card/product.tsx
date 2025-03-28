import React, { useEffect, useState } from "react";
import Button from "../Button";
import products from "../../../type/produtcs";

export interface IProps{
    product: products,
    onBuyClick: () => void;
}


const CardProduct: React.FC<IProps> = ({product, onBuyClick}) => {

    const formateValue = (product.price / 10).toLocaleString('pt-BR', { minimumFractionDigits: 2 })

    return (
        <div className="container-card">

            <div className="card">
                <img src={product.photo}/>
                <div className="container-desc">
                    <p className="desc-product-text">{product.productName}.</p>
                        <strong className="price-text">R$ {formateValue}</strong>
                    <p className="oft-text">ou 2x de {product.price/2} sem juros</p>
                        <strong className="free-shipping">Frete grátis</strong>
                    <Button ClassName="btn-buy" text="Comprar" onClick={onBuyClick}/>
                </div>
                
            </div>
          
        </div>
    )
}

export default CardProduct;