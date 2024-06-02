import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainPage from "./MainPage";
import MainPageHeader from "../../component/MainPageHeader";
import SmallHeader from "../../component/SmallHeader";
import IntroImg from "../../assets/mainpageimg2.png";
import SideBar from "../../component/SideBar";

const MainPageList = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sidebarTop, setSidebarTop] = useState(80);
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const maxSidebarTop = 100;

    useEffect(() => {
        fetch("https://udr2.wild2.duckdns.org/api/posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            return response.json();
        })
        .then(data => setPosts(data))
        .catch(error => console.error("Error fetching posts:", error));
    }, []);

    // 스크롤시 발생 이벤트
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const targetTop = Math.min(Math.max(80, scrollTop), maxSidebarTop);
            setSidebarTop(targetTop); // 헤더의 높이 판정
            setIsScrolled(scrollTop > 50); // 화면 50px 넘어가면 인식
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPosts = posts.filter(
        (post) => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.post_tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
    ).reverse();

    const countDownvotes = (votes) => votes.filter(vote => vote.vote_type === "downvote").length;
    const countUpvotes = (votes) => votes.filter(vote => vote.vote_type === "upvote").length;

    const handleContainerClick = (e) => {
        if (e.target.closest('.header-container')) return;
        setIsSearchClicked(false);
    };

    return (
        <Container onClick={handleContainerClick}>
            <HeaderContainer  onClick={(e) => e.stopPropagation()} isScrolled={isScrolled}>
                {isSearchClicked ? (
                    <SmallHeader 
                        autoFocus 
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                    />
                ) : isScrolled ? (
                    <SmallHeader
                        autoFocus 
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                    />
                ) : (
                    <MainPageHeader
                        onSearchClick={() => setIsSearchClicked(true)}
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                    />
                )}
                <SideBarContainer style={{  }}>
                <SideBar />
            </SideBarContainer>
            </HeaderContainer>
            <IntroContainerWrapper>
                <IntroContainer src={IntroImg} />
            </IntroContainerWrapper>
            <Post>
                {filteredPosts.map((post) => (
                    <MainPage
                        key={post.id}
                        postId={post.id}
                        username={post.users.nickname}
                        userId={post.user_id}
                        subtitle={post.post_tag}
                        vote_title={post.vote_content}
                        title={post.title}
                        text={post.body}
                        userLikes={post.likes.user_id}
                        likeCount={post.likes.length}
                        disagreeCount={countDownvotes(post.votes)}
                        agreeCount={countUpvotes(post.votes)}
                    />
                ))}
            </Post>
        </Container>
    );
}

export default MainPageList;

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const HeaderContainer = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: white;
    opacity: ${(props) => (props.isScrolled ? "0.8" : "1")};
    transition: all 0.3s ease;
`;

const SideBarContainer = styled.div`
    width: 15%;
    position: fixed;
    left: 0;
    height: calc(100% - 80px);
    z-index: 1000;
    transition: top 0.3s ease;
`;

const IntroContainerWrapper = styled.div`
    position: relative; 
    width: 820px;
    height: auto;
    margin: 0px auto;
    margin-left: 26%;
    z-index: 1;
`;

const IntroContainer = styled.img`
    width: 100%;
    height: auto;
`;

const Post = styled.div`
    width: 85%; 
    padding: 20px;
    padding-top: 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 12.5%;
    top: 30%;
`;
