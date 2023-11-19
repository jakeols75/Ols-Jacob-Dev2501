import React from "react";
import { useState, useEffect } from "react";
import SettingsDisplay from "../components/settingsdisplay/SettingsDisplay";

function Settings() {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const [user] = data.results;
      console.log(user);

      setuserData(user);
    }
    fetchAPI();
  }, []);

  return (
    <section>
      <h1>Settings:</h1>
      {userData && (
        <SettingsDisplay
          avatar={userData.picture.large}
          first={userData.name.first}
          last={userData.name.last}
          street={userData.location.street.number}
          streetName={userData.location.street.name}
          city={userData.location.city}
          state={userData.location.state}
          postCode={userData.location.postcode}
          email={userData.email}
          phone={userData.phone}
          userName={userData.login.username}
          password={userData.login.password}
        />
      )}
    </section>
  );
}

export default Settings;
