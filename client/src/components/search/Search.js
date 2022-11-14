import React, { useEffect, useState } from "react";

// Custom components
import SearchLocation from "./SearchLocation";
import SearchNumber from "./SearchNumber";

function Search() {
  const [locationData, setLocationData] = useState("");
  const [selectedNumPassengers, setSelectedNumPassengers] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedFlight, setSelectedFlight] = useState("");

  useEffect(() => {
    fetch("/locations")
      .then((response) => response.json())
      .then((results) => setLocationData(results));
  }, []);

  return (
    <div>
      <form onSubmit={() => console.log("Need to complete submit function")}>
        {!selectedNumPassengers ? (
          <SearchNumber min={1} max={6} setter={setSelectedNumPassengers} />
        ) : null}
        <SearchLocation
          data={locationData}
          setter={!selectedOrigin ? setSelectedOrigin : setSelectedDestination}
          blockedLocation={selectedOrigin ? selectedOrigin : null}
        />
      </form>
    </div>
  );
}

export default Search;
