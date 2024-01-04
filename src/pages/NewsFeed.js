import React, { Component } from "react";
import FormPost from "../components/form/FormPost";
//import PostCard
import PostCard from "../components/form/PostCard";

class NewsFeed extends Component {
  state = {
    postList: [
      {
        postTitle: "This is my first post!",
        postBody: "This new socail media site is going to be the best!",
      },
    ],
    color: "black",
  };
  //LifeCycle Methods::
  componentDidMount() {
    console.log("ComponentDidMount");
    setTimeout(() => {
      this.setState({ color: "green" });
    }, 5000);
  }
  //Get data from the formpost to store in data binding
  getTitleInput = (e) => {
    this.setState({ postTitle: e.target.value });
  };
  getBodyInput = (e) => {
    this.setState({ postBody: e.target.value });
  };
  //Add feaute to Create postCard with data from the getInput function
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
  //Delete post created
  removePost = (key) => {
    const newPostList = this.state.postList.filter((post) => post !== key);
    this.setState(() => ({ postList: newPostList }));
  };

  render() {
    //Stores data into the postList array
    let postCardList = this.state.postList.map((element, i) => {
      return (
        <PostCard
          key={i}
          val={element}
          onDelete={() => this.removePost(element)}
        />
      );
    });
    return (
      <div className="NewsFeed">
        <div style={styles.pageLayout}>
          <div>
            <div>
              <h4 style={{ color: this.state.color }}>Post Section:</h4>
              <FormPost
                getTitleInput={this.getTitleInput}
                getBodyInput={this.getBodyInput}
                addItem={this.addItem}
              />
            </div>
            <div style={styles.postCardStyle}>{postCardList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFeed;

const styles = {
  pageLayout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  postCardStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
