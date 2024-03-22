import React from 'react';
import './RightNav.css'
import { FaUser } from "react-icons/fa";

const RightNav = () => {
    return (
        <div className='bg-lime-500' id='rightNav'>
            {/* About */}
            <div id='about'>
                <a href="">
                    <img src="../../../public/profile.png" id='icon' alt="" />
                    <span id='aboutSpan'>About</span>
                </a>
            </div>
            {/* About */}
            {/* Resume */}
            <div id='about'>
                <a href="">
                    <img src="../../../public/cv.png" id='icon' alt="" />
                    <span id='aboutSpan'>Resume</span>
                </a>
            </div>
            {/* Resume */}
            {/* Works */}
            <div id='about'>
                <a href="">
                    <img src="../../../public/suitcase.png" id='icon' alt="" />
                    <span id='aboutSpan'>Works</span>
                </a>
            </div>
            {/* Works */}
            {/* Blogs */}
            <div id='about'>
                <a href="">
                    <img src="../../../public/blogger.png" id='icon' alt="" />
                    <span id='aboutSpan'>Blogs</span>
                </a>
            </div>
            {/* Blogs */}
            {/* Contact */}
            <div id='about'>
                <a href="">
                    <img src="../../../public/contacts.png" id='icon' alt="" />
                    <span id='aboutSpan'>Contact</span>
                </a>
            </div>
            {/* Contact */}
        </div>
    );
};

export default RightNav;