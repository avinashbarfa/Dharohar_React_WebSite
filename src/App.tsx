import React from 'react';
import './App.css';
import { Header, Footer } from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import Home from "./modules/home";
import CatalogSaree from "./modules/catalog-saree";

function App() {
    return (
        <BrowserRouter>
            <MainAppContainer>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/khathan-silk-saree" element={<CatalogSaree catalogName="khathan" priceRange={"12500 to 24500"}/>} />
                    <Route path="/chiffon-gorgette-saree" element={<CatalogSaree catalogName="Chiffon_Gorgette" priceRange={"5500 to 7500"} />} />
                    <Route path="/resham-mushrise-sarees" element={<CatalogSaree catalogName="Resham_Mushrise" priceRange={"2500 to 3500"} />} />
                </Routes>
                <Footer />
            </MainAppContainer>
        </BrowserRouter>
    );
}
export default App;

const MainAppContainer = styled.div`   
  text-align: center;
`
