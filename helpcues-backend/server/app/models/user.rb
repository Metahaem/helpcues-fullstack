class User < ApplicationRecord
  has_many :acts
  has_many :categories, through: :acts
end
