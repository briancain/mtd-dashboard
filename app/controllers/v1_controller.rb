class V1Controller < ApplicationController
  # before_filter :authenticate_user!

  # GET v1/users
  def users
    @users = User.all

    respond_to do |format|
      format.html { render json: @users.as_json(only: [:name, :email]) }
      format.json { render json: @users.as_json(only: [:name, :email]) }
    end
  end
end
