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
 const [current, setCurrent] = useState(0);
 const itemsPage = 4;

  const fetchData = async () => {
    const products = await HomePageRequests(); 
    if(products){
      setproduct(products);
    }
  };

    const handleBuyClick = (product: products) => {
    setSelectedProduct(product);
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false); 
  };

   const nextSlide = () => {
    if (current + itemsPage < productData?.length) {
      setCurrent(current + 1);
    } else {
      setCurrent(0); 
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(productData?.length - itemsPage);
    }
  };

    useEffect(() => {
    fetchData();
  });

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
        <Button img="icon/back-slide.ico" ClassName={productData?.length ? "carousel-button" : "none" } onClick={()=>{nextSlide()}}/>
          {productData?.length > 0 ? (
            productData.slice(current, current + itemsPage).map((product) => (
              <CardProduct
              key={product.id}
              product={product}
              onBuyClick={() => handleBuyClick(product)}
              />
          ))
          ) : (
          <div className="loader-points">
              <span></span>
              <span></span>
              <span></span>
          </div>
        )}
        <Button img="icon/next-slide.ico" ClassName={productData?.length ? "carousel-button" : "none" } onClick={()=>{prevSlide()}}/>
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
       <Button img="icon/back-slide.ico" ClassName={productData?.length ? "carousel-button" : "none" } onClick={()=>{nextSlide()}}/>
          {productData?.length > 0 ? (
            productData.slice(current, current + itemsPage).map((product) => (
              <CardProduct
              key={product.id}
              product={product}
              onBuyClick={() => handleBuyClick(product)}
              />
          ))
          ) : (
          <div className="loader-points">
              <span></span>
              <span></span>
              <span></span>
          </div>
        )}
        <Button img="icon/next-slide.ico" ClassName={productData?.length ? "carousel-button" : "none" } onClick={()=>{prevSlide()}}/>
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
       <span className="section-title">
        <hr />
         <h2>Produtos relacionados</h2>
        <hr  />
      </span>

      <div className="list-type-products">
        <Button text="Ver todos" ClassName="btn-all-list" />
      </div>

      <div className="list-products">
        <Button img="icon/back-slide.ico" ClassName={productData?.length ? "carousel-button" : "none" } onClick={()=>{nextSlide()}}/>
          {productData?.length > 0 ? (
            productData.slice(current, current + itemsPage).map((product) => (
              <CardProduct
              key={product.id}
              product={product}
              onBuyClick={() => handleBuyClick(product)}
              />
          ))
          ) : (
          <div className="loader-points">
              <span></span>
              <span></span>
              <span></span>
          </div>
        )}
        <Button img="icon/next-slide.ico" ClassName={productData?.length ? "carousel-button" : "none" } onClick={()=>{prevSlide()}}/>
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