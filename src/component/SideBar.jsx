import React from 'react'
import crimson from '../assets/crimson2positive.gif';
import styled from 'styled-components'

const SideBarHeader = styled.header`
    width: 10px;
`

function SideBar() {
    return (
        <SideBar>
            <div>
                <button></button>
            </div>
            <SideBarHeader>
                <img src={crimson} alt=''></img>
            </SideBarHeader>
        </SideBar>
  )
};

export default SideBar;
