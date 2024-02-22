import { Cart, Profile } from "../pages";

const privateRoutes = [
    {
        path : "/cart",
        element : <Cart />,
    },
    {
        path : "/myaccount",
        element : <Profile />
    },
];

export {privateRoutes};