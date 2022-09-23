class User < ApplicationRecord
    belongs_to :group
    has_many :posts, dependent: :destroy

    has_secure_password
    validates :username, :email, presence: true
end
