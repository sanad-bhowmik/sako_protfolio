import React from 'react';
import './MidNav.css'
import Footer from '../Footer/Footer';
import About from '../About/About';
const MidNav = () => {
    return (
        <div className='bg-orange-500' id='midNav'>
            <About/>
            <Footer/>
        </div>
    );
};

export default MidNav;