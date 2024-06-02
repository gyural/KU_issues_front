import React from 'react';
import styled from 'styled-components';
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
    & > div{
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
    width: 12%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & > a > button{
        padding: 10px;
        margin-right: 8%;
        height: 50%;
        font-weight: 500;
        border: 1px solid #0D6EFD;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & > a{
        text-decoration-line: none;
        margin-right: 8%;
    }
`;

const LogoutButton = styled.button`
    width: 100%;
    background-color: #0D6EFD;
    color: #fff;
`;

const PostButton = styled.button`
    width: 100%;
    background-color: #fff;
    color: #0D6EFD;
`;


function SurveyHeader({ searchTerm, onSearchChange, onSearchClick }) {

    return (
        <Header>
            <Logo>
                KU_issues
            </Logo>
            <SearchBar>
                <div>
                    <input
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={onSearchChange}
                        onFocus={onSearchClick}
                    />
                    <button id='search'>
                        <LiaSearchSolid size={23} />
                    </button>
                </div>
            </SearchBar>
            <NavButtons>
                <Link to='/survey'>
                    <PostButton id='post'>Create Survey</PostButton>
                </Link>
                <Link to='/'>
                    <LogoutButton id='logout'>Logout</LogoutButton>
                </Link>
            </NavButtons>
        </Header >
    );
}

export default SurveyHeader;
