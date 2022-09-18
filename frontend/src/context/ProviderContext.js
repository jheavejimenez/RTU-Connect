import { createContext } from "react";

const ProviderContext = createContext({
    auth: "",
    setAuth: () => {
    },
});

export default ProviderContext;
