import React, { useState } from "react";


export default function Weather() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
          <input
            type="Search"
            placeholder="Enter a city"
            onChange={handleCityChange}
          />
          <input type="Submit" value="Search" />
    </form>
  );
}
