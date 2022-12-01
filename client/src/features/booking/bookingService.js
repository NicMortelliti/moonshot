import { handleResponse } from "../../helpers/helpers";

// Get list of possible origins
const getOrigins = async () => {
  const response = await fetch("/origins");
  return handleResponse(response);
};

// Get list of destinations from selected origin
const getDestinations = async (origin) => {
  const response = await fetch(`/destinations?origin=${origin}`);
  return handleResponse(response);
};

const getFlights = async (origin, destination) => {
  const response = await fetch(
    `/flights?num_passengers=1&origin=${origin}&destination=${destination}`
  );
  return handleResponse(response);
};

const bookingService = {
  getOrigins,
  getDestinations,
  getFlights,
};

export default bookingService;
