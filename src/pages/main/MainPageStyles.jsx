import styled from 'styled-components';

const SearchIcon = styled.header`
    height: 96px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 0 10px 0 #777777;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Frame = styled.div`
  position: relative;
  width: 800px;
  height: auto;

  margin: 2% auto;


  border: none;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 20px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 10px;

`
const SubTitle = styled.div`
  font-size : 12px;
  padding-left: 20px;
  margin-top: 20px;
  color : grey;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;


const UserName = styled.div`
  font-size : 18px;
  margin-left: 8px;
  margin-right: 50px;
  margin-top: 45px;
`

const UserImage = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 45px;
  width: 40px;
  height: 40px;
  border-Radius: 20px;
`

const Divider = styled.div`
 position: absolute;
  margin-top : 20px;
  left: 50%; /* 컨테이너의 중앙에 위치 */
  transform: translateX(-50%); /* 가운데 정렬을 위해 좌측으로 이동 */
  width: 95%; /* 선의 길이 조절 */
  height: 1px;
  background-color: #ccc;
`

const ContentContainer = styled.div`
  display : flex;
  padding-top: 70px;
  padding-left: 40px;
  margin-bottom: 20px;
`

const Text = styled.div`
  font-size : 16px;
  line-height: 1.5;
  padding-right : 40px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* 버튼을 세로로 배치 */
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 100px;
  margin: 10px 20px;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
  white-space: nowrap;

`;

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

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LikeIcon = styled.div`
  font-size: 24px;
  color: red;
  margin-right: 8px;
  cursor: pointer;
`;

const CommentPrompt = styled.div`
  display:flex;
  padding-left: 10px;
  font-size: 15px;
  color: grey;
`;