import React, { useEffect, useState } from "react";

// Custom components
import SearchLocation from "./SearchLocation";
import SearchFlights from "./SearchFlights";
import SearchTimeline from "./SearchTimeline";
import SearchBookingDetails from "./SearchBookingDetails";

function Search({ user }) {
  const [apiResults, setApiResults] = useState("");
  const [flightResults, setFlightResults] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedFlight, setSelectedFlight] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [bookingDetails, setBookingDetails] = useState("");

  // Populate locations state when component loads
  useEffect(() => {
    fetch("/locations")
      .then((response) => response.json())
      .then((results) => setApiResults(results));
  }, []);

  // Fetch flights matching search criteria
  const getFlights = () => {
    const url = `/flights?num_passengers=1&origin=${selectedOrigin.id}&destination=${selectedDestination.id}`;
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
        r.json().then((results) => setBookingDetails(results));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <div>
      {!bookingDetails ? (
        <div>
          <SearchTimeline
            origin={selectedOrigin}
            destination={selectedDestination}
            flight={selectedFlight}
            originSetter={setSelectedOrigin}
            destinationSetter={setSelectedDestination}
            flightSetter={setSelectedFlight}
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
            {selectedDestination && flightResults && !selectedFlight ? (
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
      ) : (
        <SearchBookingDetails details={bookingDetails} />
      )}
    </div>
  );
}

export default Search;
