import React from "react";
import NavBtn from "../buttons/NavBtn";

const NavBar = (props) => {
  return (
    <nav style={styles.navStyle}>
      <NavBtn btnText="NewsFeed" />
      <NavBtn btnText="Messages" />
      <NavBtn btnText="Watch" />
    </nav>
  );
};
export default NavBar;
const styles = {
  navStyle: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#94D8FF",
    alignItems: "center",
    width: "100%",
    height: "650px",
    paddingBottom: "20px",
  },
};
