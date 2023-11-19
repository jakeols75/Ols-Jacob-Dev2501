import React from "react";
//Import Icons for Header
import { FaSearchengin } from "react-icons/fa"; //FaRegNewspaper
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
//import { BiSolidMessageSquareDetail } from "react-icons/bi";
//import { MdVideoLibrary } from "react-icons/md";
//Logo/Avatar Image Component
import MyLogo from "../logos/MyLogo";
import LogoImage from "../../images/logo.png";
import MyAvatar from "../avatar/MyAvatar";
import AvatarIcon from "../../images/avatarImage.jpeg";
//Import NavBar component

const Header = (props) => {
  return (
    <header style={styles.header}>
      <div style={styles.logoStyle}>
        <MyLogo LogoImage={LogoImage} LogoAlt="Create Thinking Logo" />
        <h1>Time to Create</h1>
      </div>
      <div style={styles.inputDiv}>
        <span style={styles.logoIcon} AvatarAlt="Profile Image">
          <FaSearchengin style={styles.searchIcon} />
        </span>
        <input type="text" style={styles.inputField} placeholder="Search" />
      </div>
      <div style={styles.avatarDisplay}>
        <Link to="/settings">
          <MyAvatar AvatarIcon={AvatarIcon} />
        </Link>
        <button style={styles.settingsButton}>
          <Link to="/settings">
            <FiSettings />
          </Link>
        </button>
      </div>
    </header>
  );
};
//#94D8FF
export default Header;

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    color: "black",
    backgroundColor: "#019155",
    justifyContent: "space-between",
    alignItem: "center",
    width: "100%",
  },
  inputDiv: {
    display: "flex",
    flexDirection: "row",
    marginTop: "3%",
  },
  logoIcon: {
    borderLeftRadius: "5px",
  },
  inputField: {
    padding: "2.5%",
    width: "400px",
    height: "20%",
    borderRadius: "5px",
  },
  logoStyle: {
    display: "flex",
    flexDirection: "row",
    gap: "7px",
    fontSize: ".7rem",
    marginLeft: "5px",
  },
  avatarDisplay: {
    display: "flex",
    flexDirection: "row",
    placeContent: "center",
    gap: "2px",
    marginTop: "3px",
  },
  buttonElements: {
    height: "25px",
    marginTop: "20px",
    backgroundColor: "#C1C1C1",
    borderRadius: "5px",
  },
  settingsButton: {
    height: "25px",
    backgroundColor: "#C1C1C1",
    borderRadius: "5px",
    marginRight: "5px",
  },
  searchIcon: {
    backgroundColor: "#ffffff",
    height: "30px",
    width: "20px",
    borderRadius: "5px",
    marginTop: "2px",
  },
};
