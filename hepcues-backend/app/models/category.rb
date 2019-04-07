class Category < ApplicationRecord
  has_many :acts
  has_many :users, through: :acts
end
