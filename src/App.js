import React, { Component } from "react";
//Header Component
import Header from "./components/header/Header";
import FormPost from "./components/form/FormPost";
import AdForm from "./components/ads/AdForm";
//import NavBar for Left Side
import NavBar from "./components/navbar/NavBar";
//import PostCard
import PostCard from "./components/form/PostCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div> */}
          <Header />
        {/* </div> */}
        <div style={styles.pageLayout}>
          <NavBar />
          <div>
            {/* <div> */}
              <FormPost />
            {/* </div> */}
            {/* <div> */}
              <PostCard />
            </div>
          </div>
          <AdForm />
        </div>
      // </div>
    );
  }
}

export default App;

const styles = {
  pageLayout: {
    display: "flex",
    flexDirection: "row",
    // placeContent: "center",
    justifyContent: "space-between",
    // margin: "auto",
  },
};
