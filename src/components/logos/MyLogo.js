import React from "react";

const MyLogo = (props) => {
  return (
    <img src={props.LogoImage} alt={props.LogoAlt} style={styles.myLogo} />
  );
};
export default MyLogo;

const styles = {
  myLogo: {
    height: "50px",
    borderRadius: "50%",
  },
};
