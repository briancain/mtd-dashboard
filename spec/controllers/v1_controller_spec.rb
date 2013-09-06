require 'spec_helper'

describe V1Controller do

  describe "GET 'users'" do
    it "returns http success" do
      get 'users'
      response.should be_success
      # json_body  = JSON.parse(response.body)
      # json_body[0]["name"].should == "brian"
    end
  end

end
