class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

    # def show
    # end

    # def create
    # end

    # def destroy
    # end

end
