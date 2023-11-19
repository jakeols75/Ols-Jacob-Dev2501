import React from "react";

const SettingsDisplay = (props) => {
  return (
    <section style={styles.settingsLayout}>
      <section style={styles.formLayout}>
        <section>
          <section style={styles.settingsLayout}>
            <div>
              <img src={props.avatar} alt="ASPCA" style={styles.imgStyle} />
            </div>
            <div>
              <h1 style={styles.formInfo}>
                Name: {props.first} {props.last}
              </h1>
            </div>
          </section>
        </section>
        <section>
          <section style={styles.formLayout}>
            <div>
              <p style={styles.formInfo}>UserName: {props.userName}</p>
            </div>
            <div>
              <p style={styles.formInfo}>City: {props.city}</p>
            </div>
          </section>
          <section style={styles.formLayout}>
            <div>
              <p style={styles.formInfo}>State: {props.state}</p>
            </div>
            <div>
              <p style={styles.formInfo}>Post Code: {props.postCode}</p>
            </div>
          </section>
          <section style={styles.formLayout}>
            <div>
              <p style={styles.formInfo}>
                Street: {props.street} {props.streetName}
              </p>
            </div>
            <div>
              <p style={styles.formInfo}>Phone: {props.phone}</p>
            </div>
          </section>
          <section>
            <div>
              <p style={styles.formInfo}>Password: {props.password}</p>
            </div>
          </section>
        </section>
      </section>

      <button style={styles.btnStyle}>Edit</button>
    </section>
  );
};
export default SettingsDisplay;

const styles = {
  settingsLayout: {
    display: "flex",
    flexDirection: "column",
  },
  formLayout: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "spaceBetween",
  },
  formInfo: {
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    border: "solid",
    padding: "7px",
    fontSize: "1rem",
    margin: "15px",
    width: "250px",
    height: "30px",
  },
  btnStyle: {
    width: "100px",
    height: "25px",
    backgroundColor: "#6b8c7e",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  imgStyle: {
    borderRadius: "50px",
  },
  pageLayout: {
    display: "flex",
    flexDirection: "row",
  },
};
