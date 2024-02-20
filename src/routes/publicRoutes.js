import { ProductDetail } from "../components";
import { Login, Shop, Signup } from "../pages";

const authRoutes = [
    {
        path : 'login',
        element: <Login/>,
    },
    {
        path : "signup",
        element : <Signup />
    },
];

const contentRoutes = [
    {
        path : "product/:category/:id",
        element : <ProductDetail />
    },
    {
        path : "shop",
        element : <Shop />
    }
]


export {authRoutes, contentRoutes}