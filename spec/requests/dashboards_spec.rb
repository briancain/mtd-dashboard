require 'spec_helper'


describe "Dashboard Pages" do
  page_base_title = 'ANCOR Dashboard'

  describe "Home Page View no Auth" do
    it "should not have the content 'Welcome'" do
      visit '/dashboard/home'
      page.should_not have_content('Welcome')
    end

    it "should have content 'Please sign in'" do
      visit '/dashboard/home'
      page.should have_content('Please sign in')
    end

    it "should have the page title '#{page_base_title} | Sign in'" do
      visit '/dashboard/home'
      expect(page).to have_title("#{page_base_title} | Sign in")
      # page.should have_selector('title', :text => "#{page_base_title} | Home")
    end
  end
end
