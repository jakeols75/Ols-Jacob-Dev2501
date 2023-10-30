import React from "react";
//Import Icons for Header
import { FaSearchengin, FaRegNewspaper } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdVideoLibrary } from "react-icons/md";
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
          <FaSearchengin />
        </span>
        <input type="text" style={styles.inputField} placeholder="Search" />
      </div>
      <div style={styles.avatarDisplay}>
        <MyAvatar AvatarIcon={AvatarIcon} />
        <button style={styles.settingsButton}>
          <FiSettings />
        </button>
      </div>
    </header>
  );
};
export default Header;

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    padding: "2%",
    color: "black",
    backgroundColor: "#94D8FF",
    justifyContent: "space-between",
    alignItem: "center",
  },
  inputDiv: {
    display: "flex",
    flexDirection: "row",
    marginTop: "2%",
  },
  logoIcon: {
    padding: "2%",
    borderLeftRadius: "5px",
  },
  inputField: {
    padding: "2%",
    width: "400px",
    height: "20%",
    borderRadius: "5px",
  },
  logoStyle: {
    display: "flex",
    flexDirection: "row",
    gap: "2px",
    fontSize: ".7rem",
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
  },
};
