import React, { useState } from 'react';
import SmallHeader from '../component/SmallHeader';
import MainPageHeader from '../component/MainPageHeader';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

function Test() {
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleContainerClick = (e) => {
    if (e.target.closest('.header-container')) return;
    setIsSearchClicked(false);
  };

  return (
    <Container onClick={handleContainerClick}>
      <div className="header-container" onClick={(e) => e.stopPropagation()}>
        {isSearchClicked ? (
          <SmallHeader autoFocus />
        ) : (
          <MainPageHeader onSearchClick={() => setIsSearchClicked(true)} />
        )}
      </div>
    </Container>
  );
}

export default Test;
