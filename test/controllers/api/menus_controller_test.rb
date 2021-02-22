require "test_helper"

class Api::MenusControllerTest < ActionDispatch::IntegrationTest
  test "should get skip-routes" do
    get api_menus_skip-routes_url
    assert_response :success
  end
end
