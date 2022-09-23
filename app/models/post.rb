class Post < ApplicationRecord
    belongs_to :user
    has_one_attached :picture
    
    validates :caption, length: {maximum: 100}, presence: true

end
