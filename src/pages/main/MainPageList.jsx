import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainPage from "./MainPage";
import MainPageHeader from "../../component/MainPageHeader";
import IntroImg from "../../assets/mainpageimg2.png";

const MainPageList = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchClicked, setIsSearchClicked] = useState(false);


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

    return (

        <Container>
            <MainPageHeader searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
            <IntroContainer src={IntroImg}/>
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
                        
                        disagreeCount={countDownvotes(post.votes)}
                        agreeCount={countUpvotes(post.votes)}
                    />
                ))}
            </Post>
        </Container>
    );
};



const Container = styled.div`
    width: 100%;
    height: 100%;
    width: 100%;
    height: 100%;
`;

const IntroContainer = styled.img`
  display: flex;
  flex-direction: column;
  width: 820px;
  height: auto;
  margin : 0px auto;
  margin-left: 33%;
  position: sticky;
  background-color: white;
  top: 80px; 
  z-index: 1;
`  

const Post = styled.div`
    margin-left: 20%; 
    width: 85%; 
    padding: 20px;
    padding-top: 0;
    position: sticky;
    top: 0px; 
    overflow-y: auto;
`;

export default MainPageList;
