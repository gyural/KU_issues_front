import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/searchicon.png';

const Search = (props) => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchInput placeholder="게시글 검색" />
        <SearchImage src={SearchIcon} />
      </SearchInputContainer>
      <SubtitleContainer>
        <Subtitle >자유게시판</Subtitle>
        <Subtitle >질문</Subtitle>
        <Subtitle >불편사항</Subtitle>
        <Subtitle >건의사항</Subtitle>
      </SubtitleContainer>
    </SearchContainer>
  );
};

export default Search;

// 검색 전체 컨테이너
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 60px;
  width: 900px;
  margin: 40px auto; 
`;

// 검색창 컨테이너
const SearchInputContainer = styled.div`
    display:flex;
    justify-content: center;
    
    position: relative;
    width: 100%;
`;

//검색
const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px 0 40px; 
  border: 1px solid #7a7a7a;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 10px;
  outline: none;
`;

//검색 아이콘
const SearchImage = styled.img`
  position: absolute;
  left: 10px; 
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

//부제목(태그) 컨테이너
const SubtitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
`;

//부제목
const Subtitle = styled.div`
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
`