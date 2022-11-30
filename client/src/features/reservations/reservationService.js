import { handleResponse } from "../../helpers/helpers";

// Get user reservations
const getReservations = async () => {
  const response = await fetch("/reservations");
  return handleResponse(response);
};

const reservationService = {
  getReservations,
};

export default reservationService;
