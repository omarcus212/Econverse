import React, { useEffect, useState } from 'react';
import api from '../../../connectionAPI';
import products from '../../../type/produtcs';
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  product: products,
  closeModal?: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, closeModal}) => {

   const [contador, setContador] = useState<number>(1);

  // Função para incrementar o contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Função para decrementar o contador
  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
   const formatarContador = (numero: number): string => {
    return numero.toString().padStart(2, '0');
  };


  return (

      <div className="product-card">
      <div className="product-image">
        <img src={product.photo ? product.photo:'image/celular.png'} alt={'carregando'} />
      </div>
      <div className="product-info">
        <h3>{product.productName}</h3>
        <strong>{product.price}</strong>
        <p>{product.descriptionShort}<strong>Veja mais detalhes do produto &gt;</strong></p>
        <span>
          <span className="contt">
            <img src='icon/minus.ico' onClick={decrementar}/>
            <p>{formatarContador(contador)}</p>
            <img src='icon/plus.ico' onClick={incrementar}/>
          </span>
          <button className="btn-checkout"> Comprar
        </button>
        </span>
        
      </div>
       <span className="close-modal"><IoMdClose onClick={closeModal} /></span>
    </div>

  );
};

export default Modal;
