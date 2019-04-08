class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :acts
  has_many :acts
  class ActSerializer < ActiveModel::Serializer
    attributes :id, :content, :done_count
  end
end
