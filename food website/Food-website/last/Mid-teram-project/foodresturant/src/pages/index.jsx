import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from './Home/Home'
import Cart from './Cart/Cart'
import PlaceOrder from './PlaceOder/PlaceOrder'
import Footer from '../components/Footer/Footer'
import Login from '../components/loginpopup/Login'

export default function Index() {

    const [showLogin, setShowLogin] = useState(false)
    console.log(showLogin)
    return (
        <>
            <Navbar setState={setShowLogin} />
            {showLogin ? <Login setState={setShowLogin} /> : <></>}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<PlaceOrder />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
