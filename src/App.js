import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
//Header Component
//import Header from "./components/header/Header";
//import FormPost from "./components/form/FormPost";
//import AdForm from "./components/ads/AdForm";
//import NavBar for Left Side
//import NavBar from "./components/navbar/NavBar";
//import PostCard
//import PostCard from "./components/form/PostCard";
//Nav paths
import DashBoard from "../src/pages/DashBoard";
import Messages from "../src/pages/Messages";
import Settings from "../src/pages/Settings";

import NewsFeed from "./pages/NewsFeed";

class App extends Component {
  render() {
    return (
      <div style={styles.pageLayout}>
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="newsfeed" element={<NewsFeed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    );
  }
}

export default App;

const styles = {
  pageLayout: {
    display: "flex",
    flexDirection: "coloumn",
    placeContent: "center",
    margin: "auto",
  },
};
