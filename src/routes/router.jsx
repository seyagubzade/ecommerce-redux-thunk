import Basket from "../pages/Basket";
import Home from "../pages/Home";

const RoutesConfig = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/basket',
        element: <Basket />
    }
]

export default RoutesConfig;