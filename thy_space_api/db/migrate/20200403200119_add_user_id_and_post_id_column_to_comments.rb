class AddUserIdAndPostIdColumnToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :column, :user_id, :integer
    add_column :column, :post_id, :integer
  end
end
