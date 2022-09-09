import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Новые поступления в этом сезоне</h1>
            <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
            <Link to="/shop" className="button">Открыть магазин</Link>
        </div>
    );
};

export default Home;