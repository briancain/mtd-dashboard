require "spec_helper"

describe ConfiguresController do
  describe "routing" do

    it "routes to #index" do
      get("/configures").should route_to("configures#index")
    end

    it "routes to #new" do
      get("/configures/new").should route_to("configures#new")
    end

    it "routes to #show" do
      get("/configures/1").should route_to("configures#show", :id => "1")
    end

    it "routes to #edit" do
      get("/configures/1/edit").should route_to("configures#edit", :id => "1")
    end

    it "routes to #create" do
      post("/configures").should route_to("configures#create")
    end

    it "routes to #update" do
      put("/configures/1").should route_to("configures#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/configures/1").should route_to("configures#destroy", :id => "1")
    end

  end
end
