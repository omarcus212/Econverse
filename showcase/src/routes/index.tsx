import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/Home";
import Teste from "../pages/teste";


const Routing: React.FC = () => {



    return (
        <BrowserRouter>
                 <Routes>
                        <Route index path={`${process.env.PUBLIC_URL}/`} element={<PageHome />} />
                        <Route index path={`${process.env.PUBLIC_URL}/teste`} element={<Teste />} />
                    </Routes>   
        </BrowserRouter>

    )
}

export default Routing