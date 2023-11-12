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
    backgroundColor: "gray",
    marginBottom: "5px",
    borderStyle: "solid",
    paddingTop: "20px",
  },
  cardImg: {
    height: "100px",
    width: "150px",
    justifyContent: "center",
    items: "center",
    margin: "5px",
  },
  textStyle: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  paraStyle: {
    fontSize: ".7rem",
  },
};
