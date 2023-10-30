import React, { Component } from "react";
//Header Component
import Header from "./components/header/Header";
import FormPost from "./components/form/FormPost";
import AdForm from "./components/ads/AdForm";
//import NavBar for Left Side
import NavBar from "./components/navbar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.appContainer}>
        <div>
          <Header />
        </div>
        <div style={styles.pageLayout}>
          <NavBar />
          <FormPost />
          <AdForm />
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  pageLayout: {
    display: "flex",
    flexDirection: "col",
    placeContent: "center",
    margin: "auto",
  },
  appContainer: {},
};