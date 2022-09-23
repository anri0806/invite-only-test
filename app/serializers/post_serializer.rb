class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :caption, :user_id, :created_at, :picture
  #add :image?
  has_one :user

  def picture
    rails_blob_path(object.picture, only_path: true) if object.picture.attached?
  end

end
