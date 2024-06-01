import React from "react";
import styled from 'styled-components';

function Comment({ name, comment }) {
    
    return (
        <CommentContainer>
            <Name>{name}</Name>
            <Text>{comment}</Text>
        </CommentContainer>
    );
}

export default Comment;

// 개별 댓글 컨테이너
const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

// 이름
const Name = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

// 댓글 내용
const Text = styled.div`
    font-size: 14px;
`;