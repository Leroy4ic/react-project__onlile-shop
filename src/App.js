import React from "react";
import './styles/app.scss';
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

function App() {
    return (
        <div className='container'>
            <Header/>
            <main>
                <AppRouter />
            </main>
            <Footer />
        </div>
    );
}

export default App;
