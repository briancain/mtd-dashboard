require 'yaml'
require 'fileutils'
require 'pp'

class DashboardController < ApplicationController
  before_filter :authenticate_user!
  include DashboardHelper

  # GET /dashboard/home
  # GET /
  def home
    @users = User.all
    @nodes = get_fullstack_config
    @instance_status = get_instance_status
  end

  # GET /dashboard/manage
  def manage
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
    # TODO:
    #   Have a functoin that queries the backend project
    #   for the status of each service. Place that in a hash where
    #   the key is the service name and the value is what state it is
    #   (i.e. 'Service Down', 'Running', 'Unknown', etc)
    #   and have the view build the table (see: dashboard/network)
    #
    # UPDATE:
    #   This information will be gathered from the json files.
    #   Will need a function that gets those files, and returns hashes of
    #   the names and status. Then through js, a view can decide what
    #   label to give while generating the network table.
    #
    # get config hash
    @nodes = get_fullstack_config

    @instance_status = get_instance_status

    @instances = get_instances

    # get all instance data
    # to make available to view

    # puts "###"
    # puts "Nodes in controller"
    # @nodes.each do | node |
    #   puts "- #{node}"
    # end

    # Get nodes with import/exports
    # @node_map = get_import_export_map
  end

  # Upload a given network config
  def file_upload
    tmp = params[:configfile]
    file = File.join("public", "uploads", params[:configfile].original_filename)
    FileUtils.cp tmp.path, file
    puts "File uploaded to: public/uploads"
    # Put up file load success alert?
    redirect_to("/dashboard/manage", :notice => "File #{params[:configfile].original_filename} uploaded")
  end

  # GET /dashboard/instanceview
  def instances
    @data_hash = get_instance_data '528527014c9be8da23000001'
    @instance_status = get_instance_status
  end

end
