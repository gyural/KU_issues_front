import React, { useState, useEffect } from "react";
import styled, { css } from 'styled-components';
import CommentList from "../comment/CommentList";
import DefaultImage from "../../assets/User.png"

function MainPage(props) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [agreeCount, setAgreeCount] = useState(props.agreeCount);
  const [disagreeCount, setDisagreeCount] = useState(props.disagreeCount);
  const [selected, setSelected] = useState(null);
  const [showComments, setShowComments] = useState(false);  
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setLikeCount(props.likeCount || 0);
  }, [props.likeCount]);

  const sendVote = async (voteType) => {
    const voteData = {
      post_id: props.postId,
      vote_type: voteType,
      user_id: props.userId,
    };
    console.log(props.postId);
    console.log(props.userID);
    console.log(voteType);

    try {
      const response = await fetch(`http://localhost:8080/api/votes/${props.postId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },  
        credentials: 'include',
        body: JSON.stringify(voteData),
      });

      if (!response.ok) {
        alert('투표 전송 실패');
        throw new Error('투표 전송 실패.');
      }

      const result = await response.json();
      console.log('투표 전송 성공:', result);
      setUpdate(!update);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  const sendLike = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/posts/${props.postId}/like`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        alert('좋아요 전송 실패');
        throw new Error('좋아요 전송 실패.');
      }

      const result = await response.json();
      console.log('좋아요 전송 성공:', result);
      setUpdate(!update);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  // 찬성 버튼 클릭
  const handleAgreeClick = () => {
    if (selected === 'agree') {
      setAgreeCount(agreeCount - 1);
      setSelected(null);
    } else {
      setAgreeCount(agreeCount + 1);
      setSelected('agree');
      sendVote('upvote');
    }
  };

  // 반대 버튼 클릭
  const handleDisagreeClick = () => {
    if (selected === 'disagree' || selected ==='agree') {
      return
    } else {
      setDisagreeCount(disagreeCount + 1);
      setSelected('disagree');
      sendVote('downvote');
    }
  };

  // 찬성 반대 퍼센트
  const renderButton = () => {
    if (props.vote_title) {
      const totalCount = agreeCount + disagreeCount;
      const agreePercent = totalCount > 0 ? (agreeCount / totalCount) * 100 : 0;
      const disagreePercent = totalCount > 0 ? (disagreeCount / totalCount) * 100 : 0;

      return (
        <ButtonContainer key={update}>
          <VoteTitle voteTitleLength={props.vote_title.length}>{props.vote_title}</VoteTitle>
          <Button onClick={handleAgreeClick} selected={selected === 'agree'}>찬 성</Button>
          <Percent>{agreePercent.toFixed(1)}%</Percent>
          <Button onClick={handleDisagreeClick} selected={selected === 'disagree'}>반 대</Button>
          <Percent>{disagreePercent.toFixed(1)}%</Percent>
        </ButtonContainer>
      );
    } // type == 2일때 실행(사진)
    /*
     else if (props.type === 2) {
      return (
        <ButtonContainer>
          <Image>
            <img src={props.image} alt="Image" />
          </Image>
        </ButtonContainer>
      );
    }
    */
  };

  // 좋아요 버튼 클릭
  const handleLikeClick = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
      sendLike();
    }
  };
  // 댓글 창 표시
  const OpenComments = () => {
    setShowComments(!showComments);
  };

  // 댓글 창 닫기
  const CloseComments = () => {
    setShowComments(!showComments);
  };

  return (
    <PostContainer>
      <Header>
        <TitleContainer>
          <SubTitle>{props.subtitle}</SubTitle>
          <Title>{props.title}</Title>
        </TitleContainer>
        <UserInfo>
          <UserImage 
            src={DefaultImage}
            alt="User" />
          <UserName>{props.username}</UserName>
        </UserInfo>
      </Header>
      <Divider></Divider>
      <ContentContainer>
        <Text>{props.text}</Text>
        {renderButton()}
      </ContentContainer>
      <Footer>
        <LikeContainer>
          <LikeIcon liked={liked} onClick={handleLikeClick}>❤️</LikeIcon>
          <span>{likeCount}</span>
        </LikeContainer>
        <Comment onClick={OpenComments}>댓글을 보시려면 여기를 클릭해 주세요.</Comment>
      </Footer>
      {showComments && <CommentList postId={props.postId} onClose={CloseComments} />}
    </PostContainer>
  );
}

export default MainPage;

// 전체 프레임

// 게시글 컨테이너
const PostContainer = styled.div`
  position: relative;
  width: 800px;
  height: auto;
  margin : 10px auto;
  margin-left: 15%;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  outline: none;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 20px;
`;

// 헤더(제목, 사용자)
const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px; 
`;

// 제목 컨테이너
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 제목
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 10px;
`;

// 부제목
const SubTitle = styled.div`
  font-size : 12px;
  padding-left: 20px;
  margin-top: 20px;
  color : grey;
`;

// 사용자 컨테이너
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

// 사용자 이름
const UserName = styled.div`
  font-size: 18px;
  margin-left: 8px;
  margin-top: 45px;
`;

// 사용자 사진
const UserImage = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 45px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

// 줄긋기
const Divider = styled.div`
  margin-top : 20px;
  
  // 줄위치 고정
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 95%;
  height: 1px;
  background-color: #ccc;
`;

// 내용 및 버튼 컨테이너
const ContentContainer = styled.div`
  display : flex;
  padding-top: 50px;
  padding-left: 40px;
  margin-bottom: 20px;
`;

// 내용
const Text = styled.div`
  width : 70%;
  font-size : 20px;
  line-height: 1.5;
  padding-right : 40px;
`;

// 버튼 컨테이너
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  margin-top: 10px;
  margin-right: 0px;
`;


const getSizeContainer = (props) => {
  if (props.voteTitleLength > 10) {
    return css`
      font-size: 20px;
    `;
  } else {
    return css`
      font-size: 30px;
    `;
  }
};

const VoteTitle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  border: none;
  font-weight: bold;
  ${(props) => getSizeContainer(props)}
`;

// 찬성 반대 버튼
const Button = styled.button`
  padding: 10px 80px;
  margin: 10px auto;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: ${({ selected }) => (selected ? '#b1b1b1' : 'white')};
  cursor: pointer;
  white-space: nowrap;  // 줄바꿈 x
`;

// 퍼센트 표시
const Percent = styled.div`
  font-size: 14px;
  text-align: center;
  margin: 5px 0;
`;

// 이미지 설정
/*
const Image = styled.div`
  padding: 0; 
  width: 200px; 
  height: auto; 
  margin: 10px 0px;
  margin-right: 20px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
*/

// 하단 좋아요 및 댓글 컨테이너
const Footer = styled.div`
  display: flex;
  align-items: center;
  padding-left : 20px;
  padding-bottom : 10px;
  margin-top: 20px;
  font-size: 12px;
  color: grey;
`;

// 좋아요 컨테이너
const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

// 좋아요 아이콘
const LikeIcon = styled.div`
  font-size: 24px;
  color: red;
  margin-right: 8px;
  cursor: pointer;
`;

// 댓글
const Comment = styled.div`
  display:flex;
  padding-left: 10px;
  font-size: 15px;
  color: grey;
  cursor: pointer;
`;
