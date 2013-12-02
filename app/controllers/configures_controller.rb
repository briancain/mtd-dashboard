class ConfiguresController < ApplicationController
  # GET /configures
  # GET /configures.json
  def index
    @configures = Configure.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @configures }
    end
  end

  # GET /configures/1
  # GET /configures/1.json
  def show
    @configure = Configure.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @configure }
    end
  end

  # GET /configures/new
  # GET /configures/new.json
  def new
    @configure = Configure.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @configure }
    end
  end

  # GET /configures/1/edit
  def edit
    @configure = Configure.find(params[:id])
  end

  # POST /configures
  # POST /configures.json
  def create
    @configure = Configure.new(params[:configure])

    respond_to do |format|
      if @configure.save
        format.html { redirect_to @configure, notice: 'Configure was successfully created.' }
        format.json { render json: @configure, status: :created, location: @configure }
      else
        format.html { render action: "new" }
        format.json { render json: @configure.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /configures/1
  # PUT /configures/1.json
  def update
    @configure = Configure.find(params[:id])

    respond_to do |format|
      if @configure.update_attributes(params[:configure])
        format.html { redirect_to @configure, notice: 'Configure was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @configure.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /configures/1
  # DELETE /configures/1.json
  def destroy
    @configure = Configure.find(params[:id])
    @configure.destroy

    respond_to do |format|
      format.html { redirect_to configures_url }
      format.json { head :no_content }
    end
  end
end
