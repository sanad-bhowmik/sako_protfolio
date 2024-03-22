import React from 'react';
import './About.css';

const About = () => {
    

    return (
        <div id='AboutDiv' className='mt-4'>
            <div className='flex'>
                <h1>About</h1>
                <hr id='hr' />
            </div>
            <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning      complex problems into simple, beautiful and intuitive designs.
                <br />
                <br />
                My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
            </p>

            <section className='mt-4' id='whatDo'>
                <h2>What I DO!</h2>
                <section id='skill' className='mt-10 grid grid-cols-2 gap-4'>
                    <div className="bg-yellow-50 pt-5 pl-5 pr-5 pb-5 " id='ux'>
                        <div className='flex mb-4' id='ui'>
                            <img src="../../../public/ui.svg" alt="" />
                            <span className='ml-4'>Ui/Ux Design</span>
                        </div>
                        <span id='doDetails'>Lorem ipsum dolor sit.</span>
                    </div>
                    <div className="bg-slate-200 pt-5 pl-5 pr-5 pb-5" id='ux'>
                        <div className='flex mb-4' id='ui'>
                            <img src="../../../public/app.svg" alt="" />
                            <span className='ml-4'>App Development</span>
                        </div>
                        <span id='doDetails'>Lorem ipsum dolor sit.</span>
                    </div>
                    <div className="bg-pink-50 pt-5 pl-5 pr-5 pb-5" id='ux'>
                        <div className='flex mb-4' id='ui'>
                            <img src="../../../public/img.svg" alt="" />
                            <span className='ml-4'>Photography</span>
                        </div>
                        <span id='doDetails'>Lorem ipsum dolor sit.</span>
                    </div>
                    <div className="bg-indigo-50 pt-5 pl-5 pr-5 pb-5" id='ux'>
                        <div className='flex mb-4' id='ui'>
                            <img src="../../../public/web.svg" alt="" />
                            <span className='ml-4'>Web Development</span>
                        </div>
                        <span id='doDetails'>Lorem ipsum dolor sit.</span>
                    </div>
                </section>
            </section>


            <section id='clinet' className="mt-4 mb-10">
                <h2 className='mb-6'>Clients</h2>
                <div className='flex gap-10'> 
                    <img src="../../../public/client-logo-2.webp" alt="" className='h-12' />
                    <img src="../../../public/client-logo-3.webp" alt="" className='h-12' />
                    <img src="../../../public/client-logo-4.webp" alt="" className='h-12' />
                    <img src="../../../public/client-logo-3.webp" alt="" className='h-12' />
                    <img src="../../../public/client-logo-2.webp" alt="" className='h-12' />
                </div>
               
            </section>
        </div>
    );
};

export default About;