class Group < ApplicationRecord
    has_many :users

    validates :group_name, length: {maximum: 40}, presence: true
end
