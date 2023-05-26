class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :postal_code
      t.string :password_digest
      t.string :recovery_password_digest
      t.boolean :is_parent
      t.boolean :is_caregiver
      t.text :description
      t.string :photo_url
      t.string :gender

      t.timestamps
    end
  end
end
