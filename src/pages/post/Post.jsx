import React, { useState } from 'react';
import styled from 'styled-components';

function PostCreationForm() {
  const [title, setTitle] = useState('');
  const [post_tag, setPostTag] = useState('');
  const [vote_content, setVoteContent] = useState('');
  const [body, setBody] = useState('');


  const [subtitle, setSubtitle] = useState(-1);
  const [image, setImage] = useState(null);

  const handlePostTagChange = (event) => {
    setPostTag(event.target.value);
  };

  const handlesubtitleChange = (event) => {
    setSubtitle(Number(event.target.value));
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSave = () => {
    
  };

  const handleCancel = () => {
    window.location.href = '/';
    console.log('Canceled');
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // 값이 제대로 제출되는지 확인

    console.log('Title:', title);
    console.log('Body:', body);
    console.log('PostTag:', post_tag);
    console.log('VoteContent: ', vote_content);

    const PostData = {
        title,
        post_tag,
        vote_content,
        body
};

    try {
        const response = await fetch('http://localhost:8080/api/posts/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(PostData),
        });

        if (!response.ok) {
            alert('글 작성 성공.')
            throw new Error('글 작성 실패.');
        }
        const result = await response.json();
        console.log('글 작성 성공:', result);
    } catch (error) {
        console.error('에러 발생:', error);
    }
};


  return (
    <Frame onSubmit={handleSubmit} action ='' method='POST'>
      <TopContainer>
        <TagSelectorContainer >
          <SubTitleSelect id="tagSelector" value={post_tag} onChange={handlePostTagChange}>
            <option value="">게시글 태그 선택</option>
            <option value="자유게시판">자유게시판</option>
            <option value="질문게시판">질문게시판</option>
            <option value="건의사항">건의사항</option>
            <option value="불편사항">불편사항</option>
          </SubTitleSelect>
        </TagSelectorContainer>
        <CheckboxContainer>
          <StyledSubtitle>
            <StyledInput
              type="radio"
              name="subtitle"
              value={0}
              onChange={handlesubtitleChange}
              checked={subtitle === 0}
            />
            <StyledP>없음</StyledP>
          </StyledSubtitle>
          <StyledSubtitle>
            <StyledInput
              type="radio"
              name="subtitle"
              value={1}
              onChange={handlesubtitleChange}
              checked={subtitle === 1}
            />
            <StyledP>투표</StyledP>
          </StyledSubtitle>
          <StyledSubtitle>
            <StyledInput
              type="radio"
              name="subtitle"
              value={2}
              onChange={handlesubtitleChange}
              checked={subtitle === 2}
            />
            <StyledP>사진</StyledP>
          </StyledSubtitle>
        </CheckboxContainer>
      {subtitle === 2 && (
        <ImageUploadContainer>
          <ImageInput type="file" accept="image/*" onChange={handleImageChange} />
        </ImageUploadContainer>
      )}
      </TopContainer>
      <TitleContainer>
        <TitleInput
          type="text"
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={handleTitleChange}
        />
      </TitleContainer>
      <Textarea
        placeholder="내용을 입력하세요."
        value={body}
        onChange={handleBodyChange}
      />
      <ButtonContainer>
        <SaveButton type="button" onClick={handleSubmit}>저장</SaveButton>
        <CancelButton type="button" onClick={handleCancel}>취소</CancelButton>
      </ButtonContainer>
    </Frame>
  );
}

export default PostCreationForm;

// 프레임
const Frame = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  width: 800px;
  margin: 6% auto;
`;

// 서브 타이틀과 select 컨테이너
const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

// 
const TagSelectorContainer = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
`;

//서브 타이틀선택
const SubTitleSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-top: 5px;
  outline: none;
`;

// 서브 타이틀
const StyledSubtitle = styled.label`
  display: flex;
  white-space: nowrap;
  margin-right: 50px;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;

const StyledInput = styled.input`
  border: 1.5px;
  border-radius: 1px;
  width: 30px;
  height: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 90%;
`;

const TitleInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #ccc;
  margin-right: 10px;
`;

const Textarea = styled.textarea`
  align-self: center;
  width: 100%;
  height: 400px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  margin-right: 300px;
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageUploadContainer = styled.div`
  margin-bottom: 20px;
  width: 30%;
`;

const ImageInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
`