import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { mode } from "@chakra-ui/theme-tools";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AppContextProvider from "./context/AppContextProvider.tsx";

const styles = {
    global: (props: any) => ({
        body: {
            bg: mode("gray.100", "#000")(props),
            color: mode("gray.800", "whiteAlpha.900")(props),
        },
    }),
};

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    components: {
        Drawer: {
            sizes: {
                md: "350px", // Adjust the 'md' size to 350px
            },
        },
    },
};

// 3. extend the theme
const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppContextProvider>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <App />
                </ChakraProvider>
            </BrowserRouter>
        </AppContextProvider>
    </React.StrictMode>
);
