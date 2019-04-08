class AddDoneToActs < ActiveRecord::Migration[5.2]
  def change
    add_column :acts, :done_count, :integer, default: 0
  end
end
