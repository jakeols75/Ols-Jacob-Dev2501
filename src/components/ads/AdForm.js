//Import Ad card
import AdCard from "./AdCard";
import oculusImg from "../../images/oculus.jpg";
import travelImg from "../../images/travel.jpg";
import reactImg from "../../images/react.png";

const AdForm = (props) => {
  return (
    <div style={styles.formStyle}>
      <AdCard
        adCardImg={oculusImg}
        AdTitle="Oculus Rift 2"
        AdDescription="Get the Oculus Rift 2 Today for $249.99"
      />
      <AdCard
        adCardImg={travelImg}
        AdTitle="Time To Travel?"
        AdDescription="Airbnb Offers travel Options for all!"
      />
      <AdCard
        adCardImg={reactImg}
        AdTitle="Try ReactJS Today"
        AdDescription="ReactJs is the number One Javscript Library Offered!"
      />
    </div>
  );
};
export default AdForm;

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "#94D8FF",
    alignItems: "center",
    margin: "auto",
  },
};
