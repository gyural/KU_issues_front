import React from "react";
import styled, { keyframes } from 'styled-components';
import Comment from "./Comment";
import downArrow from '../../assets/down.png'; 

const commentsData = {
    1: [
        { name: "정준용", comment: "안녕" },
        { name: "시스템", comment: "응답없음." }
    ],
    2: [
        { name: "집사", comment: "고양이" }
    ],
    3: [
        { name: "시스템", comment: "응답없음." },
        { name: "시스템", comment: "응답없음." },
        { name: "시스템", comment: "응답없음." },
        { name: "시스템", comment: "응답없음." },
        { name: "시스템", comment: "응답없음." },
        { name: "시스템", comment: "응답없음." },
        { name: "시스템", comment: "응답없음." },
        { name: "시스템", comment: "응답없음." },
        { name: "시스템", comment: "응답없음." },
        { name: "시스템", comment: "응답없음." },
        { name: "시스템", comment: "응답없음." }
    ]
};

function CommentList({ postId, onClose }) {
    const comments = commentsData[postId] ;
    
    return (
        <CommentsContainer>
            <CloseButtonContainer onClick={onClose}>
                <CloseButtonImg src={downArrow} alt="close" />
            </CloseButtonContainer>
            <CommentsContent>
                {comments.map((comment, index) => (
                    <Comment key={index} name={comment.name} comment={comment.comment} />
                ))}
            </CommentsContent>
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
    width : 900px;
    margin: 0px auto;
    padding: 10px;
    border-top: 1px solid #ccc;
    animation: ${slideUpFromBottom} 800ms ease-out;
    position: fixed; 
    bottom: 0; 
    left: 0;
    right: 0;
    max-height: 60%; 
    background: white;  // 배경색 설정(안하면)
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px 10px 0 0;
    z-index: 1000; //
    overflow: hidden;  
`;

// 댓글 내용 컨테이너
const CommentsContent = styled.div`
    overflow-y: auto; 
    max-height: calc(100% - 60px); 
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