import React, { Component } from "react";
//Header Component
import Header from "./components/header/Header";
import FormPost from "./components/form/FormPost";
import AdForm from "./components/ads/AdForm";
//import NavBar for Left Side
import NavBar from "./components/navbar/NavBar";
//import PostCard
import PostCard from "./components/form/PostCard";
//Import avatar Image
import AvatarIcon from "../src/images/avatarImage.jpeg";

class App extends Component {
  state = {
    postList: [],
  };

  getInput = (e) => {
    this.setState({ postTitle: e.target.value });
    this.setState({ postBody: e.target.value });
  };

  addItem = (e) => {
    e.preventDefault();
    this.setState({
      postList: [
        ...this.state.postList,
        { postTitle: this.state.postTitle, postBody: this.state.postBody },
      ],
    });
    e.target.reset();
  };

  render() {
    let postCardList = this.state.postList.map((element, i) => {
      return <PostCard key={i} val={element} />;
    });
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div style={styles.pageLayout}>
          <NavBar />
          <div>
            <div>
              <FormPost getInput={this.getInput} addItem={this.addItem} />
            </div>
            <div>{postCardList}</div>
          </div>
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
    flexDirection: "coloumn",
    placeContent: "center",
    margin: "auto",
  },
};
