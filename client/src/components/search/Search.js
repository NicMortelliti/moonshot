import React, { useEffect, useState } from "react";

// Custom components
import SearchLocation from "./SearchLocation";
import SearchNumber from "./SearchNumber";
import SearchFlights from "./SearchFlights";
import SearchTimeline from "./SearchTimeline";

function Search({ user }) {
  const [apiResults, setApiResults] = useState("");
  const [flightResults, setFlightResults] = useState("");
  const [selectedNumPassengers, setSelectedNumPassengers] = useState(1);
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedFlight, setSelectedFlight] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  // Populate locations state when component loads
  useEffect(() => {
    fetch("/locations")
      .then((response) => response.json())
      .then((results) => setApiResults(results));
  }, []);

  // Fetch flights matching search criteria
  const getFlights = () => {
    const url = `/flights?num_passengers=${selectedNumPassengers}&origin=${selectedOrigin.id}&destination=${selectedDestination.id}`;
    fetch(url)
      .then((response) => response.json())
      .then((results) => setFlightResults(results));
  };

  // Post reservation to backend
  const submitBooking = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);

    fetch("/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        flight_id: selectedFlight.id,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((results) => console.log(results));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <div>
      <SearchTimeline
        origin={selectedOrigin}
        destination={selectedDestination}
        originSetter={setSelectedOrigin}
        destinationSetter={setSelectedDestination}
      />
      <form onSubmit={(e) => submitBooking(e)}>
        {/* Display origin options */}
        {!selectedOrigin && apiResults ? (
          <SearchLocation
            data={apiResults}
            setter={setSelectedOrigin}
            blockedLocation="null"
          />
        ) : null}

        {/* Display destination options */}
        {selectedOrigin && !selectedDestination ? (
          <SearchLocation
            data={apiResults}
            setter={setSelectedDestination}
            blockedLocation={selectedOrigin}
          />
        ) : null}

        {/* Trigger search fetch */}
        {selectedDestination && !flightResults ? getFlights() : null}

        {/* Display search results */}
        {selectedDestination && flightResults ? (
          <SearchFlights data={flightResults} setter={setSelectedFlight} />
        ) : null}

        {/* Display submit button */}
        {selectedFlight ? (
          <button type="submit">
            {isLoading ? "Loading..." : "Book Flight!"}
          </button>
        ) : null}
      </form>
      {errors ? errors.map((each) => <p key={each}>{each}</p>) : null}
    </div>
  );
}

export default Search;
