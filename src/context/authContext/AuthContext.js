import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const token = "2323" // empty dependency array ensures this effect runs only once on mount

    return (
        <AuthContext.Provider 
            value={{
                token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
