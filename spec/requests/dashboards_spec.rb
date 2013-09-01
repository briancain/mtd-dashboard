require 'spec_helper'


describe "Dashboard Pages" do
  page_base_title = 'MTD Dashboard'
  describe "Login Page View" do
    it "should have the page title '#{page_base_title} | Home'" do
      visit '/'
      page.should have_selector('title', :text => "#{page_base_title} | Home")
    end
  end

  describe "Home Page View" do
    it "should have the content 'MTD Dashboard'" do
      visit '/dashboard/home'
      page.should have_content('MTD Dashboard')
    end

    it "should have the page title '#{page_base_title} | Home'" do
      visit '/dashboard/home'
      page.should have_selector('title', :text => "#{page_base_title} | Home")
    end
  end
end
