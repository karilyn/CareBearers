require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase
  setup do
    @user = users(:one)
  end

  test "visiting the index" do
    visit users_url
    assert_selector "h1", text: "Users"
  end

  test "should create user" do
    visit users_url
    click_on "New user"

    fill_in "Description", with: @user.description
    fill_in "Email", with: @user.email
    fill_in "First name", with: @user.first_name
    fill_in "Gender", with: @user.gender
    check "Is caregiver" if @user.is_caregiver
    check "Is parent" if @user.is_parent
    fill_in "Last name", with: @user.last_name
    fill_in "Password digest", with: @user.password_digest
    fill_in "Photo url", with: @user.photo_url
    fill_in "Postal code", with: @user.postal_code
    fill_in "Recovery password digest", with: @user.recovery_password_digest
    click_on "Create User"

    assert_text "User was successfully created"
    click_on "Back"
  end

  test "should update User" do
    visit user_url(@user)
    click_on "Edit this user", match: :first

    fill_in "Description", with: @user.description
    fill_in "Email", with: @user.email
    fill_in "First name", with: @user.first_name
    fill_in "Gender", with: @user.gender
    check "Is caregiver" if @user.is_caregiver
    check "Is parent" if @user.is_parent
    fill_in "Last name", with: @user.last_name
    fill_in "Password digest", with: @user.password_digest
    fill_in "Photo url", with: @user.photo_url
    fill_in "Postal code", with: @user.postal_code
    fill_in "Recovery password digest", with: @user.recovery_password_digest
    click_on "Update User"

    assert_text "User was successfully updated"
    click_on "Back"
  end

  test "should destroy User" do
    visit user_url(@user)
    click_on "Destroy this user", match: :first

    assert_text "User was successfully destroyed"
  end
end
