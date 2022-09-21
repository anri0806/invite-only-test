class Post < ApplicationRecord
    # belongs_to :user
    
    validates :caption, length: {maximum: 100}, presence: true
end
