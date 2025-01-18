import api from "../connectionAPI";
 
 const HomePageRequests = async () => {
await api.get('/products')
  .then((data) => {
    console.log(data.data);
  })
  .catch((error) => {
    console.error('Erro capturado:', error);
  });
}

export default HomePageRequests;