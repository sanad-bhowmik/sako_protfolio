import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`navbar ${isDarkMode ? 'dark' : 'light'} `}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src="../../../public/logo-preview.webp" width="153" height="32" alt="" />
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" onClick={toggleDarkMode}>
            <div className="w-10 rounded-full">
              <img alt="Toggle Dark Mode" className="moon-icon text-white" src={isDarkMode ? "/moon.svg" : "/sun.svg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
