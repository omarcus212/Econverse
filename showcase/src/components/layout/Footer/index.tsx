import React, { useEffect, useState } from "react";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import ImgIcon from "../../shared/IconLogo/Icon";

const Footer: React.FC = () => {

    return (
       <footer>
           <div className="container-subscribe">

            <span className="label-description">
             <h2>Inscreva-se na nossa newsletter</h2>
             <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
            </span>

            <span className="input-send">
                <span>
                    <Input type="text" ClassName="input-subscribe"/>
                    <Input type="text" ClassName="input-subscribe"/>
                    <Button text="INSCREVER" ClassName="btn-send"/>
                </span>
                <span >
                    <Input type="checkbox" ClassName="checkbox" />
                    <p>Aceito os termos e condições</p>
                </span>
                
            </span>
           </div>

           <div className="social">
            <span>
                <ImgIcon img="image/logo.png" className=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span>
                    <ImgIcon img="svg/instagram.svg"/>
                    <ImgIcon img="svg/facebook.svg"/>
                    <ImgIcon img="svg/linkedin.svg"/>
                </span>
            </span>
         
         <div className="social-list">


            <span className="list-description">
                <h3>Institucional</h3>
                <p>Sobre Nós</p>
                <p>Movimento</p>
                <p>Trabalhe conosco</p>
            </span>

             <span className="list-description">
                <h3>Ajuda</h3>
                <p>Suporte</p>
                <p>Fale Conosco</p>
                <p>Perguntas Frequentes</p>
            </span>

            <span className="list-description">
                <h3>Termos</h3>
                <p>Termos e Condições</p>
                <p>Política de Privacidade</p>
                <p>Troca e Devolução</p>
            </span>
            </div>
           </div>
       </footer>
    )
}

export default Footer;