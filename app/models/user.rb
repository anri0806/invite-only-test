class User < ApplicationRecord
    belongs_to :group

    has_many :commented_posts, foreign_key: "user_id", class_name: "Post", dependent: :destroy

    has_many :comments
    has_many :posts, through: :comments

    has_secure_password
    validates :username, :email, presence: true
end
