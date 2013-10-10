class DashboardController < ApplicationController
  before_filter :authenticate_user!

  # GET /dashboard/home
  # GET /
  def home
    @users = User.all
  end

  # GET /dashboard/index
  def index
    @users = User.all
  end

end
