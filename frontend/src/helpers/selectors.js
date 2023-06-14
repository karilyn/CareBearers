export function getCompletedReservations(reservations) {
  return reservations.filter(reservation => reservation.status === 'completed');
}

export function getCaregiverDetails(caregivers, caregiver_id) {
  const array = caregivers.filter(caregiver => caregiver.id === caregiver_id);
  return array[0];
}

export function getPendingReservations(reservations) {
  return reservations.filter(reservation => reservation.status === 'pending');
}

export function getParentDetails(parents, parent_id) {
  const array = parents.filter(parent => parent.id === parent_id);
  return array[0];
}