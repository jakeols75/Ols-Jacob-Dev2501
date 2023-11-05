import React from "react";

//Import icons for Post Card
import { GrClose, GrFormEdit } from "react-icons/gr";
import MyAvatar from "../avatar/MyAvatar";
import AvatarIcon from "../../images/avatarImage.jpeg";

const PostCard = (props) => {
  return (
    <div style={styles.postContainer}>
      <MyAvatar AvatarIcon={AvatarIcon} />
      <div>
        <h3 style={styles.titlePost}>{props.val.postTitle}</h3>
        <p>{props.val.postBody}</p>
      </div>
      <div style={styles.buttonStyle}>
        <button>
          <GrClose />
        </button>
        <button>
          <GrFormEdit />
        </button>
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
  postImg: {
    width: "2.5rem",
  },
};
