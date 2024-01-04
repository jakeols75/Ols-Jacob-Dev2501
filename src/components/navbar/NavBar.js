import React from "react";
//import NavBtn from "../buttons/NavBtn";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav style={styles.navStyle}>
      <Link to="/" style={styles.linkStyle}>
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
    flexDirection: "row",
    backgroundColor: "#019155",
    justifyContent: "start",
    alignItems: "start",
    width: "100%",
    paddingBottom: "10px",
  },
  linkStyle: {
    fontSize: "1.3rem",
    cursor: "pointer",
    color: "black",
    margin: "3px",
    border: "solid",
    padding: "3px",
    backgroundColor: "#6b8c7e",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};
