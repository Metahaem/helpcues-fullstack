class ActSerializer < ActiveModel::Serializer

  attributes :id, :content, :category_id, :user_id, :done_count, :image_url

end
