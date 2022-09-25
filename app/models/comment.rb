class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :post

    validates :content, length: {maximum: 100}, presence: true

end
