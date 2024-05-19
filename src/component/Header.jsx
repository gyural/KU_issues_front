import React from "react";
import crimson from '../assets/crimson2positive.gif';

function Header() {
    return(
        <header>
            <img src={crimson} alt="" style={{width: '100px'}} className="headerComponents"></img>
            <span className="headerComponents">캠퍼스 신문고</span>
        </header>
    )
};

export default Header;