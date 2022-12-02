import { handleResponse } from "../../helpers/helpers";

// Get user reservations
const getReservations = async () => {
  const response = await fetch("/reservations");
  return handleResponse(response);
};

// Delete user reservation
const deleteReservation = async (id) => {
  console.log(id);
  const response = await fetch(`/reservations/${id}`, { method: "DELETE" });
  return handleResponse(response);
};

const reservationService = {
  deleteReservation,
  getReservations,
};

export default reservationService;
