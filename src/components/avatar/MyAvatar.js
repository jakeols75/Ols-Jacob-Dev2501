import React, { Component } from "react";

const MyAvatar = (props) => {
  return (
    <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.myAvatar} />
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
