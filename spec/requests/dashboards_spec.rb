require 'spec_helper'


describe "Dashboard Pages" do
  page_base_title = 'MTD Dashboard'

  describe "Home Page View" do
    it "should have the content 'Welcome'" do
      visit '/dashboard/home'
      page.should have_content('Welcome')
    end

    it "should have the page title '#{page_base_title} | Home'" do
      visit '/dashboard/home'
      expect(page).to have_title("#{page_base_title} | Home")
      # page.should have_selector('title', :text => "#{page_base_title} | Home")
    end
  end
end
