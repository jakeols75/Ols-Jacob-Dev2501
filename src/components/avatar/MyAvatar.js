import React from "react";
import { Link } from "react-router-dom";
const MyAvatar = (props) => {
  return (
    <Link to="/settings">
      <img
        src={props.AvatarIcon}
        alt={props.AvatarAlt}
        style={styles.myAvatar}
      />
    </Link>
  );
};
export default MyAvatar;

const styles = {
  myAvatar: {
    height: "50px",
    cursor: "pointer",
    borderRadius: "50%",
    margin: "15px",
  },
};
