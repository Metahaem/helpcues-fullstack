class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(name: params[:name])
    if @user.valid? && @user.save
      render json: @user
    else
      render json: {error: "Unable to create user."}, status: 400
    end
  end

  def increase_done_count
    @user = User.find(params[:user_id])
    @user.increment!(:done_count)
    render json: @user
  end

  private

    def user_params
      params.permit(:name)
    end

    def find_user
      @user = User.find(params[:id])
    end

end
