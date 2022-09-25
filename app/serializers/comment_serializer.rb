class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :post_id, :created_at, :posted_by
  ### delete user_id?

  def posted_by
    object.user.username
  end



end
