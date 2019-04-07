class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :done_count
  has_many :acts
  class ActSerializer < ActiveModel::Serializer
    attributes :id, :content, :done_count, :image_url
  end
end
