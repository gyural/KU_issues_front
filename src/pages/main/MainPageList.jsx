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
    
    const maxSidebarTop = 100;

    useEffect(() => {
        fetch("http://localhost:8080/api/posts", {
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const targetTop = Math.min(Math.max(80, scrollTop), maxSidebarTop); // Ensure the sidebar stays within bounds
            setSidebarTop(targetTop);

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
    );

    const countDownvotes = (votes) => {
        return votes.filter(vote => vote.vote_type === "downvote").length;
    };
    const countUpvotes = (votes) => {
        return votes.filter(vote => vote.vote_type === "upvote").length;
    };
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
                    <MainPageHeader
                        onSearchClick={() => setIsSearchClicked(true)}
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                    />
                )}
            </div>
            <SideBarContainer style={{ top: `${sidebarTop}px` }}>
                <SideBar />
            </SideBarContainer>
            <IntroContainer src={IntroImg} />
            <Post>
                {filteredPosts.map((post) => (
                    <MainPage
                        postId={post.id}
                        username={post.users.nickname}
                        userId={post.user_id} // 아마 수정해야될듯?
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
const SideBarContainer = styled.div`
    position: fixed;
    top: 80px;
    left: 0;
    height: calc(100% - 80px);
    width: 100%;
    z-index: 1000;
    transition: top 0.3s ease;
`;

const IntroContainer = styled.img`
  display: flex;
  flex-direction: column;
  width: 820px;
  height: auto;
  margin : 0px auto;
  position: sticky;
  background-color: white;
  top: 80px; 
  z-index: 1;
`

const Post = styled.div`
    width: 85%; 
    padding: 20px;
    padding-top: 0;
    position: sticky;
    top: 0px; 
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 12.5%;
    top: 30%;
`;
