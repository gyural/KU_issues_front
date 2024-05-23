import React from "react";
import crimson from '../assets/crimson2positive.gif';
import styled from "styled-components";

const PageHeader = styled.header`
    margin: 0;
    padding: 0;

    height: 96px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 0 10px 0 #777777;
`;
const Logo = styled.span`
    font-size: 20px;
    position: absolute;
`;

function Header() {
    return(
        <PageHeader>
            <img src={crimson} alt="" style={{width: '65px', height: '82.21px', position: 'absolute', left: '25%'}}></img>
            <Logo>고려대 신문고</Logo>
        </PageHeader>
    )
};

export default Header;