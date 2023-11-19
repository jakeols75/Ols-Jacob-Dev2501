import React from "react";

const AdCard = (props) => {
  return (
    <article style={styles.adStyle}>
      <img src={props.adCardImg} alt={props.adCardAlt} style={styles.cardImg} />
      <h1 style={styles.textStyle}>{props.AdTitle}</h1>
      <p style={styles.paraStyle}>{props.AdDescription}</p>
    </article>
  );
};
export default AdCard;
const styles = {
  adStyle: {
    width: "200px",
    height: "200px",
    backgroundColor: "#D0D0D0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5px",
    borderStyle: "solid",
    borderRadius: "5px",
    paddingTop: "20px",
  },
  cardImg: {
    height: "100px",
    width: "150px",
    marginLeft: "10%",
    margin: "auto",
  },
  textStyle: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginLeft: "3%",
  },
  paraStyle: {
    fontSize: ".7rem",
    marginLeft: "3%",
  },
};
