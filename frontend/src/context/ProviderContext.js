import {createContext} from "react";

export const ProviderContext = createContext({
    auth: "",
    setAuth: (auth) => {},
});
