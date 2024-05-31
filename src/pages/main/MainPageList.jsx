import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainPage from "./MainPage";
import Search from "./Search";
import MainPageHeader from "../../component/MainPageHeader";

const MainPageList = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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

    return (
        <Container>
            <MainPageHeader searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
            <Post>
                {filteredPosts.map((post) => (
                    <MainPage
                        key={post.post_id}
                        postId={post.post_id}
                        username={post.user_id}
                        subtitle={post.post_tag}
                        title={post.title}
                        text={post.body}
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
    width: 100%;
    height: 100%;
`;

const Post = styled.div`
    margin-left: 15%; 
    width: 85%; 
    padding: 20px;
    overflow-y: auto;
`;
