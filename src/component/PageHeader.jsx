import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div`
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #ccc;
    z-index: 20000;
`;

const Logo = styled.div`
    padding: 1%;
    margin-left: 1%;
    font-size: 20px;
    font-weight: 400;
    font-family: "Inknut Antiqua";
`;


const NavButtons = styled.div`
    width: 11%;
    height: 100%;
    display: flex;
    align-items: flex;
    justify-content: flex-end;
    & > a{
        text-decoration-line: none;
        margin-right: 8%;
    }
`;
const LogoutButton = styled.button`
    margin-top: 30%;
    width: 100%;
    background-color: #fff;
    color: #0D6EFD;
    padding: 10px;
        height: 50%;
        font-weight: 500;
        border: 1px solid #0D6EFD;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    &:hover{
        background-color: #0D6EFD;
    color: #fff;
    }
`


function PageHeader({ searchTerm, onSearchChange, onSearchClick }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('#Categories') === null) {
                setIsDropdownVisible(false);
            }
        };

        if (isDropdownVisible) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownVisible]);
    return (
        <Header>
            <Logo>
                KU_issues
            </Logo>
            <NavButtons>
                <Link to='/'>
                    <LogoutButton id='logout'>Logout</LogoutButton>
                </Link>
            </NavButtons>
        </Header >
    );
}

export default PageHeader;