class AddImageUrlToActs < ActiveRecord::Migration[5.2]
  def change
    add_column :acts, :image_url, :string, default: `https://gph.is/2xrAMS5`
  end
end
