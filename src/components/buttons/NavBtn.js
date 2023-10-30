import React from "react";

const NavBtn = (props) => {
  return <button style={styles.navBtnStyle}>{props.btnText}</button>;
};
export default NavBtn;

const styles = {
  navBtnStyle: {
    fontWeight: "bold",
    backgroundColor: "#DAD7CD",
    width: "100px",
    height: "40px",
    marginTop: "13px",
    borderRadius: "5px",
  },
};
