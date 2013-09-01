require 'spec_helper'


describe "Dashboard Pages" do
  page_base_title = 'MTD Dashboard'
  describe "Login Page View" do
    it "should have the title '#{page_base_title} | Signin'" do
      visit '/login/index'
      page.should have_selector('title', :text => "#{page_base_title} | Signin")
    end
  end
end
