import React, { useEffect, useState } from "react";
import HomePageRequests from '../../service/home';
import HeaderHome from "../../components/layout/Header";
import BannerCard from "../../components/shared/Card/banner-card";
import Button from "../../components/shared/Button";
import IconCard from "../../components/shared/Card/icon-card";
import CardProduct from "../../components/shared/Card/product";
import products from "../../type/produtcs";
import Modal from "../../components/layout/Modal";
import CirculeEco from "../../components/shared/Card/circule-eco";
import Footer from "../../components/layout/Footer";

const PageHome: React.FC = () => {

 const [productData, setproduct] = useState<products[]>([]);
 const [modalOpen, setModalOpen] = useState<boolean>(false); 
 const [selectedProduct, setSelectedProduct] = useState<products | null>(null); 
 const [startIndex, setStartIndex] = useState<number>(0); 
 const cardsPerView = 4;

  const fetchData = async () => {

    const products = await HomePageRequests(); 
    setproduct(products); 

  };

  useEffect(() => {

    fetchData();

  }, []);
  
    const handleBuyClick = (product: products) => {
    setSelectedProduct(product);
    setModalOpen(true); 
  };


  const closeModal = () => {
    setModalOpen(false); 
  };

   const next = () => {
    if (startIndex + cardsPerView < productData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const back = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

   const visibleProducts = productData.slice(startIndex, startIndex + cardsPerView);

    return (
      
  <main>

    <HeaderHome />

    <figure className="banner-home">
      <div className="container-info-banner">
        <strong className="main-text">Venha conhecer nossas promoções</strong>
        <p className="info-text">
          <strong>50% Off</strong> nos produtos
        </p>
        <Button text="Ver produto" ClassName="btn-checkout" onClick={() => {}} />
      </div>
    </figure>

    <section className="section-category">
      <IconCard text="Tecnologia" imgIcon="svg/computador.svg" ClassName="container-icon-card" />
      <IconCard text="Supermercado" imgIcon="svg/supermercados.svg" ClassName="container-icon-card" />
      <IconCard text="Bebidas" imgIcon="svg/whiskey.svg" ClassName="container-icon-card" />
      <IconCard text="Ferramentas" imgIcon="svg/ferramentas.svg" ClassName="container-icon-card" />
      <IconCard text="Saúde" imgIcon="svg/cuidados-de-saude.svg" ClassName="container-icon-card" />
      <IconCard text="Esportes e Fitness" imgIcon="svg/corrida.svg" ClassName="container-icon-card" />
      <IconCard text="Moda" imgIcon="svg/moda.svg" ClassName="container-icon-card" />
    </section>

    <section className="container-list-product">

      <span className="section-title">
        <hr />
         <h2>Produtos relacionados</h2>
        <hr  />
      </span>
      
      <div className="list-type-products">
        <Button text="ACESSÓRIOS" ClassName="btn-type-list" />
        <Button text="TABLETS" ClassName="btn-type-list" />
        <Button text="NOTEBOOKS" ClassName="btn-type-list" />
        <Button text="TVs" ClassName="btn-type-list" />
        <Button text="Ver todos" ClassName="btn-type-list" />
      </div>

      <div className="list-products">
        <button className="carousel-button" onClick={back} disabled={startIndex === 0}>
          {"<"}
        </button>
        {visibleProducts.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            onBuyClick={() => handleBuyClick(product)}
          />
        ))}
        <button
          className="carousel-button"
          onClick={next}
          disabled={startIndex + cardsPerView >= productData.length}
        >
          {">"}
        </button>
      </div>
    </section>

    <section className="container-list-bannercard">
      <BannerCard label="Parceiros" description="Lorem ipsum dolor sit amet, consectetur" />
      <BannerCard label="Parceiros" description="Lorem ipsum dolor sit amet, consectetur" />
    </section>

    <section className="container-list-product">
      
       <span className="section-title">
        <hr />
         <h2>Produtos relacionados</h2>
        <hr  />
      </span>

      <div className="list-products">
        <button className="carousel-button" onClick={back} disabled={startIndex === 0}>
          {"<"}
        </button>
        {visibleProducts.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            onBuyClick={() => handleBuyClick(product)}
          />
        ))}
        <button
          className="carousel-button"
          onClick={next}
          disabled={startIndex + cardsPerView >= productData.length}
        >
          {">"}
        </button>
      </div>
    </section>

    <section className="container-list-bannercard">
      <BannerCard label="Parceiros" description="Lorem ipsum dolor sit amet, consectetur" />
      <BannerCard label="Parceiros" description="Lorem ipsum dolor sit amet, consectetur" />
    </section>

    <section className="container-list-circule-logo">
      
       <span className="section-title">
        <hr />
         <h2>Navegue por marcas</h2>
        <hr  />
      </span>

      <span>
        <CirculeEco img="" />
        <CirculeEco img="" />
        <CirculeEco img="" />
        <CirculeEco img="" />
        <CirculeEco img="" />
      </span>
    </section>

    <section className="container-list-product">
      <h1 className="section-title">Produtos relacionados</h1>
      <div className="list-type-products">
        <Button text="Ver todos" ClassName="btn-type-list" />
      </div>
      <div className="list-products">
        <button className="carousel-button" onClick={back} disabled={startIndex === 0}>
          {"<"}
        </button>
        {visibleProducts.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            onBuyClick={() => handleBuyClick(product)}
          />
        ))}
        <button
          className="carousel-button"
          onClick={next}
          disabled={startIndex + cardsPerView >= productData.length}
        >
          {">"}
        </button>
      </div>
    </section>

    {modalOpen && selectedProduct && (
      <div className="container-Modal">
        <Modal product={selectedProduct} closeModal={closeModal} />
      </div>
    )}
    <Footer/>
  </main>

  )
}

export default PageHome;