import { handleResponse } from "../../helpers/helpers";

// Get list of possible origins
const getOrigins = async () => {
  const response = await fetch("/locations");
  return handleResponse(response);
};

const getDestinations = async (id) => {
  const response = await fetch(`/flights?num_passengers=1&origin=${id}`);
  return handleResponse(response);
};

const getFlights = async () => {};

const bookingService = {
  getOrigins,
  getDestinations,
  getFlights,
};

export default bookingService;
