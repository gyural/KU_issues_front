import React, { useState } from 'react';
import styled from 'styled-components';
import { RiSoundModuleLine } from "react-icons/ri";
import { LiaSearchSolid } from "react-icons/lia";
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
    z-index: 10000;
    position: sticky;
    top: 0;
`;

const Logo = styled.div`
    padding: 1%;
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
    & > div#inputComp{
        width: 80%;
        margin-left: 1%;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover{
            border-bottom: 1px solid #0D6EFD;
            transition: all 0.3s ease 0s;
        }

        & > input{
            width: 90%;
            border: none;

            &:focus{
                outline: none;
            }
        }
    }
    & #Categories{
        border: none;
        background-color: inherit;
        color: #3d3d3d;
        cursor: pointer;
    }
    & #search{
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
    justify-content: space-between;
    
    & > button{
        padding: 10px;
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
    & > a{
        text-decoration: none;
        margin-right: 8%;
    }
    & > a > button{
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
    & > a > button#logout{
        background-color: #0D6EFD;
        color: #fff;
    }
`;
const DropdownMenu = styled.div`
    width: 30%;
    position: absolute;
    top: 80px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    & > div {
        padding: 10px;
        cursor: pointer;

        &:hover {
            background-color: #f1f1f1;
        }
    }
`;

function MainPageHeader({ onSearchClick }) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const showDropdown = () => {
        setDropdownVisible(true);
    };
    const hideDropdown = () => {
        setDropdownVisible(false);
    };
    return (
        <Header>
            <Logo>
                KU_issues
            </Logo>
            <SearchBar>
                <button
                    id='Categories'
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                >
                    <RiSoundModuleLine size={23} />
                </button>
                {isDropdownVisible && (
                    <DropdownMenu
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                    >
                        <div>Category 1</div>
                        <div>Category 2</div>
                        <div>Category 3</div>
                    </DropdownMenu>
                )}
                <div id='inputComp'>
                    <input
                        type='text'
                        placeholder='Search'
                        onClick={onSearchClick}
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
        </Header >
    );
}

export default MainPageHeader;
