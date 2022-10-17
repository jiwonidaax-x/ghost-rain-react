import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Desc from "./Desc";
import Start from "./Start";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path='/start' element={<Start />} />
            <Route path="/desc" element={<Desc/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default Router;