require 'yaml'
require 'fileutils'

class DashboardController < ApplicationController
  before_filter :authenticate_user!
  include DashboardHelper

  # GET /dashboard/home
  # GET /
  def home
    @users = User.all
    @nodes = get_fullstack_config
  end

  # GET /dashboard/index
  def index
    @users = User.all
    @nodes = get_fullstack_config
  end

  # POST /dashboard/index
  # def index
  #   tmp = params[:configfile]
  #   file = File.join("public", "uploads", params[:configfile].original_filename)
  #   FileUtils.cp tmp.path, file
  #   puts "File uploaded to: public/uploads"
  #   # Put up file load success alert?
  # end

  # GET /dashboard/network
  def network
    #
    # TODO: 
    #   Have a functoin that queries the backend project
    #   for the status of each service. Place that in a hash where
    #   the key is the service name and the value is what state it is
    #   (i.e. 'Service Down', 'Running', 'Unknown', etc)
    #   and have the view build the table (see: dashboard/network)
    #
    # get config hash
    @nodes = get_fullstack_config

    # puts "###"
    # puts "Nodes in controller"
    # @nodes.each do | node |
    #   puts "- #{node}"
    # end

    # Get nodes with import/exports
    @node_map = get_import_export_map
  end

  # Upload a given network config
  def file_upload
    tmp = params[:configfile]
    file = File.join("public", "uploads", params[:configfile].original_filename)
    FileUtils.cp tmp.path, file
    puts "File uploaded to: public/uploads"
    # Put up file load success alert?
    redirect_to("/dashboard/index", :notice => "File #{params[:configfile].original_filename} uploaded")
  end

end
