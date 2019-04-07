class Act < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :category, presence: true
  validates :content, presence: true
end
