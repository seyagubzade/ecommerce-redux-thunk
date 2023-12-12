import Admin from "../pages/Admin";
import AddNew from "../pages/Admin/AddNew";
import Books from "../pages/Admin/Books";
import Dashboard from "../pages/Admin/Dashboard";
import EditProduct from "../pages/Admin/EditProduct";
import OrderDetail from "../pages/Admin/OrderDetail";
import Orders from "../pages/Admin/Orders";
import ProductDetail from "../pages/Admin/ProductDetail";
import Site from "../pages/Site";
import Cart from "../pages/Site/Cart";
import Checkout from "../pages/Site/Checkout";
import Contact from "../pages/Site/Contact";
import DetailPage from "../pages/Site/DetailPage";
import Home from "../pages/Site/Home";
import OrderComplate from "../pages/Site/OrderComplate";
import ShopPage from "../pages/Site/ShopPage";
import Wishlist from "../pages/Site/Wishlist";

const RoutesConfig = [
    {
        path: '/',
        element: <Site />,
        children: [
            {
                path: "*",
                element: <p>Error 404</p>
            },
            {
                path: '',
                element: <Home />
            },
            {
                path: 'detail/:id',
                element: <DetailPage />
            },
            {
                path: 'shop',
                element: <ShopPage />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'check-out',
                element: <Checkout />
            },
            {
                path: 'wishlist',
                element: <Wishlist />
            },
            {
                path: 'order-complate',
                element: <OrderComplate />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'books',
                element: <Books />
            },
            {
                path: 'orders',
                element: <Orders />
            },
            {
                path: 'book/detail/:id',
                element: <ProductDetail />
            },
            {
                path: 'order/detail/:id',
                element: <OrderDetail />
            },
            {
                path: 'edit/:id',
                element: <EditProduct />
            },
            {
                path: 'add-new',
                element: <AddNew />
            },

        ]
    }
]

export default RoutesConfig;