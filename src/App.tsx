import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/todo-typescript" element={<TodosPage/>}/>
                    <Route path="/todo-typescript/about" element={<AboutPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
