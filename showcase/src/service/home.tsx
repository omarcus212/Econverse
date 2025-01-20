import api from "../connectionAPI";
import products from "../type/produtcs";
 
 const HomePageRequests = async (): Promise<products[]> => {
   return await api.get('/products')
     .then((data) => {
       return data.data;
     })
     .catch((error) => {
       console.error('Erro capturado:', error);
     });
}

export default HomePageRequests;