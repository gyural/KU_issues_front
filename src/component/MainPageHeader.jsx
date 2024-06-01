import React,{useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
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
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
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
    width: 11%;
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
`
const PostButton = styled.button`
    width: 100%;
    background-color: #fff;
    color: #0D6EFD;
`
const DropdownMenu = styled.div`
    position: absolute;
    top: 83px;
    left: 34.7%;
    width: 30%;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    z-index: 1000;
    display: ${props => (props.isVisible ? 'block' : 'none')};
    animation: ${props => (props.isVisible ? fadeIn : '')} 0.3s ease-out;
    overflow: hidden;
`;

const DropdownItem = styled(Link)`
    padding: 10px 15px;
    display: block;
    color: #333;
    text-decoration: none;
    &:hover {
        background-color: #f1f1f1;
    }
`;

function MainPageHeader({ searchTerm, onSearchChange, onSearchClick }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
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
            <SearchBar>
                <button id='Categories' onClick={toggleDropdown}>
                    <RiSoundModuleLine size={23} />
                </button>
                <div>
                    <input
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChanged={onSearchChange}
                        onFocus={onSearchClick}
                    />
                    <button id='search'>
                        <LiaSearchSolid size={23} />
                    </button>
                </div>
            </SearchBar>
            <NavButtons>
                <Link to='/createpost'>
                    <PostButton id='post'>Create Post</PostButton>
                </Link>
                <Link to='/'>
                    <LogoutButton id='logout'>Logout</LogoutButton>
                </Link>
            </NavButtons>
            <DropdownMenu isVisible={isDropdownVisible}>
                <DropdownItem>자유게시판</DropdownItem>
                <DropdownItem>질문게시판</DropdownItem>
                <DropdownItem>건의사항</DropdownItem>
                <DropdownItem>불편사항</DropdownItem>
            </DropdownMenu>
        </Header >
    );
}

export default MainPageHeader;