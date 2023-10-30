import React from "react";

const MyButton = (props) => {
  return (
    <button type="submit" style={styles.myBtn}>
      {props.btnText}
    </button>
  );
};

export default MyButton;

const styles = {
  myBtn: {
    fontWeight: "bold",
    fontSize: ".9rem",
    borderRadius: "5px",
    backgroundColor: "#94D8FF",
    width: "80px",
    height: "25px",
    cursor: "pointer",
  },
};
