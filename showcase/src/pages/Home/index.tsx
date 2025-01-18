import React, { useEffect, useState } from "react";
import HomePageRequests from '../../service/home';
import api from "../../connectionAPI";
import HeaderHome from "../../components/layout/Header";

const PageHome: React.FC = () => {

useEffect(() => {

    console.log('URL da requisição:', api.defaults.baseURL);
    HomePageRequests()

    }, []);

    return (
        <main>
           <HeaderHome/>
          <span>
            <img src="image/banner.png" alt="" />
          </span>
        </main>
    )
}

export default PageHome;