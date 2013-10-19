require 'yaml'

class DashboardController < ApplicationController
  before_filter :authenticate_user!
  include DashboardHelper

  # GET /dashboard/home
  # GET /
  def home
    @users = User.all
  end

  # GET /dashboard/index
  def index
    @users = User.all
  end

  # GET /dashboard/network
  def network
    # get config hash
    @nodes = get_fullstack_config

    puts "###"
    puts "Nodes in controller"
    @nodes.each do | node |
      puts "- #{node}"
    end
  end

end
