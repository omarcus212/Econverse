import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/Home";


const Routing: React.FC = () => {



    return (
        <BrowserRouter>
                 <Routes>
                        <Route index path={`${process.env.PUBLIC_URL}/`} element={<PageHome />} />
                    </Routes>   
        </BrowserRouter>

    )
}

export default Routing