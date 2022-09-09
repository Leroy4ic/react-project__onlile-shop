import React, {Fragment} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import CompleteOrder from "../pages/CompleteOrder/CompleteOrder";

const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path='*' element={<Navigate replace to="/" />} />

                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>

                <Route path="/cart" element={<Cart/>}/>
                <Route path="/complete-order" element={<CompleteOrder/>}/>
            </Routes>
        </Fragment>
    );
};

export default AppRouter;