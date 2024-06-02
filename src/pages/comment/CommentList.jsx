import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import Comment from "./Comment";
import downArrow from '../../assets/down.png';

function CommentList({ postId, onClose }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    
    // 더미 데이터로 userId 설정
    const userId = "123";

    useEffect(() => {
        fetch(`http://localhost:8080/api/comments/${postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        })
        .then(response => response.json())
        .then(data => {
            setComments(data); 
        })
        .catch(error => {
            console.error('Error fetching comments:', error);
        });
    }, [postId]);

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (newComment) {
            // 서버로 새로운 댓글을 POST 요청
            fetch(`http://localhost:8080/api/comments/${postId}/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    withCredentials: true,
                },
                body: JSON.stringify({
                    user_id: userId,
                    post_id: postId,
                    content: newComment,
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to post comment');
                }
                return response.json();
            })
            .then(data => {
                // 새로운 댓글을 추가한 후 댓글 목록을 업데이트
                setComments([...comments, data]);
                setNewComment("");
            })
            .catch(error => {
                console.error('Error posting comment:', error);
            });
        }
    };

    return (
        <CommentsContainer>
            <CloseButtonContainer onClick={onClose}>
                <CloseButtonImg src={downArrow} alt="close" />
            </CloseButtonContainer>
            <CommentsContent>
                {comments.map((comment, index) => (
                    <Comment key={index} name={comment.User.nickname} comment={comment.content} />
                ))}
            </CommentsContent>
            <CommentForm onSubmit={handleFormSubmit}>
                <CommentInput 
                    type="text" 
                    value={newComment}
                    onChange={handleInputChange}
                    placeholder="댓글"
                />
                <CommentSubmitButton>입력</CommentSubmitButton>
            </CommentForm>
        </CommentsContainer>
    );
}

export default CommentList;

// 댓글 창이 화면 밑에서 올라오는 애니메이션
const slideUpFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 댓글 전체 컨테이너
const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    margin: 0px auto;
    margin-left: 28%;
    padding: 10px;
    border-top: 1px solid #ccc;
    animation: ${slideUpFromBottom} 800ms ease-out;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 60%;
    background: white;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px 10px 0 0;
    z-index: 1000;
    overflow: hidden;
`;

// 댓글 내용 컨테이너
const CommentsContent = styled.div`
    overflow-y: auto;
    max-height: calc(100% - 120px);
`;

// 닫기 버튼 컨테이너
const CloseButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
`;

// 닫기 버튼 이미지
const CloseButtonImg = styled.img`
    width: 20px;
    height: 20px;
`;

// 댓글 입력
const CommentForm = styled.form`
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
`;

// 댓글 입력
const CommentInput = styled.input`
    display: flex;
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

// 댓글 제출 버튼
const CommentSubmitButton = styled.button`
    padding: 10px 20px;
    margin-left: 10px;
    border: none;
    background-color: #a52d2d;
    color: white;
    border-radius: 4px;
    cursor: pointer;
`;
