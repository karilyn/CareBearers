require "test_helper"

class KidsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kid = kids(:one)
  end

  test "should get index" do
    get kids_url
    assert_response :success
  end

  test "should get new" do
    get new_kid_url
    assert_response :success
  end

  test "should create kid" do
    assert_difference("Kid.count") do
      post kids_url, params: { kid: { age: @kid.age, description: @kid.description, family_id: @kid.family_id, first_name: @kid.first_name, last_name: @kid.last_name } }
    end

    assert_redirected_to kid_url(Kid.last)
  end

  test "should show kid" do
    get kid_url(@kid)
    assert_response :success
  end

  test "should get edit" do
    get edit_kid_url(@kid)
    assert_response :success
  end

  test "should update kid" do
    patch kid_url(@kid), params: { kid: { age: @kid.age, description: @kid.description, family_id: @kid.family_id, first_name: @kid.first_name, last_name: @kid.last_name } }
    assert_redirected_to kid_url(@kid)
  end

  test "should destroy kid" do
    assert_difference("Kid.count", -1) do
      delete kid_url(@kid)
    end

    assert_redirected_to kids_url
  end
end
