class CommentsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        comments = Comment.all
        render json: comments
    end

    def group_comments
        comments = Comment.where(group_id: params[:id])
        render json: comments, status: :ok
    end

    def show
        comment = Comment.find_by(id: params[:id])
        render json: comment, status: :ok
    end

    def create
        comment = Comment.create(comment_params)
        if comment.valid?
            render json: comment, include: :user, status: :created
        else
            render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        comment = Comment.find_by(id: params[:id])
        updated_comment = comment.update(comment_params)
       
        if comment.valid?
            render json: comment, status: :created
        else
            render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.destroy
            head :no_content
        else
            render json: {error: "Comment not fonud"}, status: :not_found
        end
    end

    private

    def comment_params
        params.permit(:content, :user_id, :post_id, :group_id)
    end

end
