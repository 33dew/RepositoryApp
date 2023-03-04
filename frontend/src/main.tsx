import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from "@mantine/core";
import HomePages from './pages/home/homePages';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* <App /> */}
        <HomePages />
    </MantineProvider>
)
