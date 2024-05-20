import React from "react";
import crimson from '../assets/crimson2positive.gif';
import styled from "styled-components";

const PageHeader = styled.header`
    margin: 0;
    padding: 0;

    text-align: center;
`;

function Header() {
    return(
        <PageHeader>
            <img src={crimson} alt="" style={{width: '100px'}} className="headerComponents"></img>
            <span className="headerComponents">캠퍼스 신문고</span>
        </PageHeader>
    )
};

export default Header;