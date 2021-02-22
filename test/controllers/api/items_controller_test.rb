require "test_helper"

class Api::ItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get skip-routes" do
    get api_items_skip-routes_url
    assert_response :success
  end
end
