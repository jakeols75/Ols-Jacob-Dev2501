import React from "react";
//Import Avatar Img for form
import AvatarIcon from "../../images/avatarImage.jpeg";
import MyAvatar from "../avatar/MyAvatar";
//Import Button
import MyButton from "../buttons/MyButton";

const FormPost = (props) => {
  return (
    <section style={styles.formStyle}>
      <MyAvatar AvatarIcon={AvatarIcon} />
      <form>
        <input type="text" placeholder="Title" style={styles.formTitle} />
        <input
          type="text"
          placeholder="What would You like to Create?"
          style={styles.formElement}
        />
      </form>
      <div style={styles.btnContainer}>
        <MyButton btnText="Post" />
      </div>
    </section>
  );
};

export default FormPost;

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    width: "75%",
    height: "100%",
    alignItems: "center",
  },
  formElement: {
    width: "500px",
    height: "100px",
    borderRadius: "5px",
    marginTop: "15px",
    marginBottom: "5px",
    marginRight: "5px",
  },
  formTitle: {
    width: "500px",
    height: "20px",
    marginTop: "5px",
  },
  btnContainer: {
    marginTop: "80px",
    marginRight: "10px",
  },
};
