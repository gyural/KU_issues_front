import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const slide = keyframes`
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #ccc;
    z-index: 10000;
    position: sticky;
    top: 0;
    animation: ${slide} 800ms ease-out;
`;

const Logo = styled.div`
    margin-left: 1%;
    font-size: 20px;
    font-weight: 400;
    font-family: "Inknut Antiqua";
`;

const SearchBar = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & > div {
        width: 100%;
        height: 100%;
        margin-left: 1%;
        background-color: #fff;
        border-bottom: 2px solid #000;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > input {
            width: 90%;
            height: 90%;
            margin-bottom: 0;
            border: none;

            &:focus {
                outline: none;
            }
        }
    }
    & #search {
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
`;

const NavButtons = styled.div`
    width: 11%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > button {
        padding: 10px;
        margin-right: 8%;
        height: 67%;
        font-weight: 500;
        color: #0D6EFD;
        border: 1px solid #0D6EFD;
        border-radius: 5px;
        background-color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & > button#logout {
        background-color: #0D6EFD;
        color: #fff;
    }
    & > a {
        text-decoration: none;
    }
    & > a > button {
        padding: 10px;
        margin-right: 8%;
        height: 50%;
        font-weight: 500;
        color: #0D6EFD;
        border: 1px solid #0D6EFD;
        border-radius: 5px;
        background-color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & > a > button#logout {
        background-color: #0D6EFD;
        color: #fff;
    }
`;

function SmallHeader({ autoFocus, searchTerm, onSearchChange }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    return (
        <Header>
            <Logo>
                KU_issues
            </Logo>
            <SearchBar>
                <div>
                    <input
                        ref={inputRef}
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={onSearchChange}
                    />
                    <button id='search'>
                        <LiaSearchSolid size={23} />
                    </button>
                </div>
            </SearchBar>
            <NavButtons>
                <button id='post'>Create Post</button>
                <Link to='/'><button id='logout'>Logout</button></Link>
            </NavButtons>
        </Header>
    );
}

export default SmallHeader;
