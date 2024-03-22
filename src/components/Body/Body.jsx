import React from 'react';
import './Body.css'
import LeftNav from '../LeftNav/LeftNav';
import RightNav from '../RightNav/RightNav';
import MidNav from '../MidNav/MidNav';

const Body = () => {
    return (
        <div className='flex grid gap-x-8 gap-y-4 grid-cols-3 mt-60'>
            <LeftNav />
            <MidNav />
            <RightNav />
        </div>
    );
};

export default Body;