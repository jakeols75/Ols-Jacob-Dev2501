import React from "react";
//import My Avatar
import MyAvatar from "../avatar/MyAvatar";
import AvatarIcon from "../../images/avatarImage.jpeg";
//Import icons for Post Card
import { GrClose, GrFormEdit } from "react-icons/gr";

const PostCard = (props) => {
  return (
    <div style={styles.postContainer}>
      <MyAvatar AvatarIcon={AvatarIcon} />
      <div>
        <h3 style={styles.titlePost}>Social Media Web App</h3>
        <p>Create Thinking is my first social media platform adventure.</p>
      </div>
      <div style={styles.buttonStyle}>
        <GrClose />
        <GrFormEdit />
      </div>
    </div>
  );
};
export default PostCard;

const styles = {
  postContainer: {
    display: "flex",
    width: "75%",
    height: "100%",
    border: "solid",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    marginTop: "20%",
    padding: "5%",
  },
  buttonStyle: {
    marginBottom: "50px",
    marginLeft: "10px",
    alignItems: "start",
  },
  titlePost: {
    border: "solid",
    marginTop: "5px",
    padding: "3px",
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
  postBody: {
    fontSize: "1rem",
  },
};
