import { createContext } from "react";

const ProviderContext = createContext({
    auth: false,
    setAuth: () => {},
});

export default ProviderContext;
