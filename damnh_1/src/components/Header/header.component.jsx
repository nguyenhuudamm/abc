import React from 'react';
import './header.style.scss';
// import TopNav from './TopNav/topnav';
// import BottomNav from './BottomNav/bottomnav';

function Header() {
    return (
        <div className="home-bar">
            <div className="header">
                {/* <TopNav/> */}
                <p className='line line-central'></p>
                {/* <BottomNav /> */}
            </div>
        </div>
    );
}

export default Header
