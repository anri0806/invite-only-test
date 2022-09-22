class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin, :created_by_invite, :group_id, :created_at
end
