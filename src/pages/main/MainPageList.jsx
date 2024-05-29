import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../../component/SideBar";
import MainPage from "./MainPage";
import Search from "./Search";

const posts = [
    {
        postId: 1,
        username: "피카츄",
        subtitle: "자유게시판",
        title: "점메추",
        text: "점심 먹을려하는데 제육을 먹을까 돈까스를 먹을까 돈까스추천은 찬성 제육 추천은 반대 망관부",
        type: 0
    },
    {
        postId: 2,
        username: "집사",
        subtitle: "질문게시판",
        title: "꽁꽁얼어붙음",
        text: "꽁꽁얼어붙은한강위로고양이거fdsfadfasfdsfafdsfdsfdsafadsfdsfdsafasdfdsfasdffasdfaf걸어다닙니다..",
        type: 1
    },
    {
        postId: 3,
        username: "집사",
        subtitle: "건의사항",
        title: "꽁꽁얼어붙음",
        text: "꽁꽁얼어붙은한강위로고양이거fdsfadfasfdsfafdsfdsfdsafadsfdsfdsafasdfdsfasdffasdfaf걸어다닙니다..",
        type: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
    },
    {
        postId: 4,
        username: "한시현",
        subtitle: "질문게시판",
        title: "내일 뭐먹을까",
        text: "제육 돈까스",
        type: 1
    }
];

const MainPageList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <SideBar />
            <Post>
                <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                {filteredPosts.map((post) => (
                    <MainPage 
                        key={post.postId}
                        username={post.username}
                        subtitle={post.subtitle}
                        title={post.title}
                        postId={post.postId}
                        text={post.text}
                        type={post.type}
                        image={post.image}
                    />
                ))}
            </Post>
        </Container>
    );
}

export default MainPageList;

const Container = styled.div`
    display: flex;
`;

const Post = styled.div`
    margin-left: 15%; 
    width: 85%; 
    padding: 20px;
    overflow-y: auto;
`;