require "application_system_test_case"

class ReservationsTest < ApplicationSystemTestCase
  setup do
    @reservation = reservations(:one)
  end

  test "visiting the index" do
    visit reservations_url
    assert_selector "h1", text: "Reservations"
  end

  test "should create reservation" do
    visit reservations_url
    click_on "New reservation"

    fill_in "Caregiver", with: @reservation.caregiver_id
    fill_in "City", with: @reservation.city
    fill_in "Cost", with: @reservation.cost
    fill_in "End time", with: @reservation.end_time
    fill_in "Num of children", with: @reservation.num_of_children
    fill_in "Parent", with: @reservation.parent_id
    fill_in "Post code", with: @reservation.post_code
    fill_in "Start time", with: @reservation.start_time
    fill_in "Status", with: @reservation.status
    fill_in "Street", with: @reservation.street
    fill_in "Stripe charge", with: @reservation.stripe_charge_id
    click_on "Create Reservation"

    assert_text "Reservation was successfully created"
    click_on "Back"
  end

  test "should update Reservation" do
    visit reservation_url(@reservation)
    click_on "Edit this reservation", match: :first

    fill_in "Caregiver", with: @reservation.caregiver_id
    fill_in "City", with: @reservation.city
    fill_in "Cost", with: @reservation.cost
    fill_in "End time", with: @reservation.end_time
    fill_in "Num of children", with: @reservation.num_of_children
    fill_in "Parent", with: @reservation.parent_id
    fill_in "Post code", with: @reservation.post_code
    fill_in "Start time", with: @reservation.start_time
    fill_in "Status", with: @reservation.status
    fill_in "Street", with: @reservation.street
    fill_in "Stripe charge", with: @reservation.stripe_charge_id
    click_on "Update Reservation"

    assert_text "Reservation was successfully updated"
    click_on "Back"
  end

  test "should destroy Reservation" do
    visit reservation_url(@reservation)
    click_on "Destroy this reservation", match: :first

    assert_text "Reservation was successfully destroyed"
  end
end
