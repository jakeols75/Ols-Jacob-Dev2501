import React from "react";
//import NavBtn from "../buttons/NavBtn";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav style={styles.navStyle}>
      <Link to="/DashBoard" style={styles.linkStyle}>
        DashBoard
      </Link>
      <Link to="/Newsfeed" style={styles.linkStyle}>
        NewsFeed
      </Link>
      <Link to="/messages" style={styles.linkStyle}>
        Messages
      </Link>
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
  linkStyle: {
    fontSize: "1.3rem",
    cursor: "pointer",
    color: "black",
    margin: "3px",
    border: "solid",
    padding: "3px",
    backgroundColor: "#55c2da",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};
