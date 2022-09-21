class GroupsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]


    def index
        groups = Group.all
        render json: groups
    end

    def create
        group = Group.create(group_params)
        if group.valid?
            render json: group, status: :created
        else
            render json: {errors: group.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def group_params
        params.permit(:group_name)
    end
end
