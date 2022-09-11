import React from "react";
import './styles/app.scss';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <main>
                    <AppRouter />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
