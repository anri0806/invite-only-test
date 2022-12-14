class UsersController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    def index
        users = User.all
        render json: users
    end

    def get_users
        users = User.where(group_id: params[:id])
        render json: users, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private


    def user_params
        params.permit(:username, :email, :password, :password_confirmation, :group_id, :admin, :created_by_invite)
    end

end
