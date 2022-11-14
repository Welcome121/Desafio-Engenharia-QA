import { React, useState } from 'react';
import { Routes, Route, } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/theme';

import Home from '../pages/Home';
import Customers from '../pages/Customers';

import './styles/App.css';


function App() {
    return(
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<Customers />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;