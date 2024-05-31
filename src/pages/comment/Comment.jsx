import React from "react";

const styles = {
  wrapper: { // 댓글 박스
      margin: 10, // 박스간 여백
      padding: 10, // 높이
      display: "flex", // 
      flexDirection: "row",
      border: "2px solid grey",
      borderRadius: 16,
  },
  imageContainer : {},
  image: {                  // 이미지
      width: 50,
      height: 50,
      borderRadius: 25,
  },
  contentContainer: {       // 댓글 위치
      marginLeft: 8,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
  },
  nameText: {                // 이름
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
  },
  commentText:{            // 댓글 내용
      color: "black",
      fontSize: 16,
  },
}
function Comment(props){
  return(
      <div style={styles.wrapper}>
          <div style={styles.imageContainer}>
              <img 
                  src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  style = {styles.image}
                  alt = ""
              />
          </div>
          <div style={styles.contentContainer}>
              <span style={styles.nameText}>{props.name}</span>
              <span style={styles.commentText}>
                  {props.comment}
              </span>
          </div>
      </div>
  );
}
export default Comment;