import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './Homepage';
import Productpage from './components/Products/Productpage';
import Aboutus from './components/About/Aboutus';
import Contactus from './components/Contact/Contactus';

const App = () => {
    return (
        <Router basename="/reactjs">
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Productpage />} />
                <Route path="/contact" element={<Contactus />} />
                <Route path="/about" element={<Aboutus />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
