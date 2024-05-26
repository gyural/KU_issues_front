import React from "react";
import MainPage from "./MainPage";
import Search from "./Search";  
import styled from "styled-components";

const posts =[
    {
        postId: 1,
        username: "피카츄",
        subtitle: "자유게시판",
        title : "점메추",
        text : "점심 먹을려하는데 제육을 먹을까 돈까스를 먹을까 돈까스추천은 찬성 제육 추천은 반대 망관부",
        type : 0
    },
    {
        postId: 2,
        username: "집사",
        subtitle: "질문게시판",
        title : "꽁꽁얼어붙음",
        text:"꽁꽁얼어붙은한강위로고양이거fdsfadfasfdsfafdsfdsfdsafadsfdsfdsafasdfdsfasdffasdfaf걸어다닙니다..",
        type : 1
    },
    {
        postId: 3,
        username: "집사",
        subtitle: "건의사항",
        title : "꽁꽁얼어붙음",
        text: "꽁꽁얼어붙은한강위로고양이거fdsfadfasfdsfafdsfdsfdsafadsfdsfdsafasdfdsfasdffasdfaf걸어다닙니다..",
        type : 2,
        image : "https://www.google.com/imgres?q=%EA%BD%81%EA%BD%81%20%EC%96%BC%EC%96%B4%20%EB%B6%99%EC%9D%80%20%ED%95%9C%EA%B0%95%20%EC%9C%84%EB%A1%9C%20%EB%A7%A8%EC%9C%A0%20%EA%B0%80%20%EA%B1%B8%EC%96%B4%20%EB%8B%A4%EB%8B%99%EB%8B%88%EB%8B%A4&imgurl=https%3A%2F%2Fi.namu.wiki%2Fi%2FpBvbzNSnXnjMO6WZeSqkhZ8ri4-V2rR14SSqc6vzRj0iO2OdrXJlBDdaJztHMYYOxQC1JKLrZCdaDrBpdaGg1Q.webp&imgrefurl=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EA%25BD%2581%25EA%25BD%2581%2520%25EC%2596%25BC%25EC%2596%25B4%25EB%25B6%2599%25EC%259D%2580%2520%25ED%2595%259C%25EA%25B0%2595%2520%25EC%259C%2584%25EB%25A1%259C%2520%25EA%25B3%25A0%25EC%2596%2591%25EC%259D%25B4%25EA%25B0%2580%2520%25EA%25B1%25B8%25EC%2596%25B4%25EB%258B%25A4%25EB%258B%2599%25EB%258B%2588%25EB%258B%25A4%3Frev%3D54&docid=gwIj-xKN6KZb0M&tbnid=OmvsfHVih2AlFM&vet=12ahUKEwjn6NT376iGAxUNj68BHU9cEf0QM3oECBQQAA..i&w=300&h=168&hcb=2&ved=2ahUKEwjn6NT376iGAxUNj68BHU9cEf0QM3oECBQQAA"
    }
];

const SearchContainer = styled.div`
    display : flex;
    margin: 0px flex;
    flex-direction: column;
    align-items: center;
`


function MainPageList(props){
    
    return (
        <SearchContainer>
            <Search />
                {posts.map((posts) => {
            return(
                <MainPage username={posts.username}
                    subtitle={posts.subtitle} 
                    title={posts.title}
                    postId={posts.postId}
                    text={posts.text}
                    type={posts.type}
                    image={posts.image}/>
            );
        })}
        </SearchContainer>
    )
}
export default MainPageList;