class AddIsCaregiverToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :is_caregiver, :boolean
  end
end
