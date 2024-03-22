import React from 'react';
import './LeftNav.css'

const LeftNav = () => {
    return (
        <div className='bg-white w-80 text-black' id='leftNav'>
            <img id='img' className='z-0' src="../../../public/parson-img-1.webp" alt="" />
            <h1 id='name'>Monalisa Ashley</h1>
            <p id='uiux'>Ui/Ux Designer</p>

            <section className='flex' id='logo'>
                <div>
                    <img className='h-6' id='fb' src="../../../public/facebook.png" alt="" />
                </div>
                <div>
                    <img className='h-6'id='fb' src="../../../public/instagram.png" alt="" />
                </div>
                <div>
                    <img className='h-6'id='fb' src="../../../public/twitter.png" alt="" />
                </div>
                <div>
                    <img className='h-6' id='fb'src="../../../public/message.png" alt="" />
                </div>
            </section>
            <section id='contact'>
                {/* phone */}
                <div className='flex' id='phone'>
                    <div id='phnIcon'>
                        <img src="../../../public/smartphone.png" alt="" />
                    </div>
                    <div id='phndetails'>
                        <p id='PhoneP'>Phone</p>
                        <h5 id='num'>+123 456 789</h5>
                    </div>
                </div>
                {/* phone */}
                {/* Email */}
                <div className='flex' id='phone'>
                    <div id='phnIcon'>
                        <img src="../../../public/smartphone.png" alt="" />
                    </div>
                    <div id='phndetails'>
                        <p id='PhoneP'>Phone</p>
                        <h5 id='num'>+123 456 789</h5>
                    </div>
                </div>
                {/* Email */}
                {/* Location */}
                <div className='flex' id='phone'>
                    <div id='phnIcon'>
                        <img src="../../../public/smartphone.png" alt="" />
                    </div>
                    <div id='phndetails'>
                        <p id='PhoneP'>Phone</p>
                        <h5 id='num'>+123 456 789</h5>
                    </div>
                </div>
                {/* Location */}
                {/* Date */}
                <div className='flex' id='phone'>
                    <div id='phnIcon'>
                        <img src="../../../public/smartphone.png" alt="" />
                    </div>
                    <div id='phndetails'>
                        <p id='PhoneP'>Phone</p>
                        <h5 id='num'>+123 456 789</h5>
                    </div>
                </div>
                {/* Date */}
            </section>
        </div>
    );
};

export default LeftNav;