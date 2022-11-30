// Get user reservations
const getReservations = async () => {
  const response = await fetch("/reservations");

  console.log(response);

  return response.json();
};

const reservationService = {
  getReservations,
};

export default reservationService;
