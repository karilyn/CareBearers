export function getCompletedReservations(reservations) {
  return reservations.filter(reservation => reservation.status === 'completed');
}

export function getCaregiverDetails(caregivers, caregiver_id) {
  const array = caregivers.filter(caregiver => caregiver.id === caregiver_id);
  return array[0];
}