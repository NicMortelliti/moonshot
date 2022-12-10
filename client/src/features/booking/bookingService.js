import { handleResponse } from "../../helpers/helpers";

// Get list of possible origins
const getOrigins = async () => {
  console.log("fetching origins");
  const response = await fetch("/origins");
  return handleResponse(response);
};

// Get list of destinations from selected origin
const getDestinations = async (origin) => {
  const response = await fetch(`/destinations?origin=${origin}`);
  return handleResponse(response);
};

// Get list of flights with selected origin and destination
const getFlights = async (origin, destinationId) => {
  const { id: originId } = origin;
  const response = await fetch(
    `/flights?num_passengers=1&origin=${originId}&destination=${destinationId}`
  );
  return handleResponse(response);
};

const bookFlight = async (userId, flightId) => {
  const response = await fetch("/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: userId,
      flight_id: flightId,
    }),
  });
  return handleResponse(response);
};

const bookingService = {
  bookFlight,
  getOrigins,
  getDestinations,
  getFlights,
};

export default bookingService;
