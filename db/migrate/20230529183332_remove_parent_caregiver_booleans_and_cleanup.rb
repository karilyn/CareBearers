class RemoveParentCaregiverBooleansAndCleanup < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :is_parent
    remove_column :users, :is_caregiver
    remove_column :kids, :family_id

    add_column :kids, :parent_id, :integer
    rename_column :kids, :first_name, :name
    remove_column :kids, :last_name
  end
end
