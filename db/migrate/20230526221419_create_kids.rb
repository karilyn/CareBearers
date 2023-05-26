class CreateKids < ActiveRecord::Migration[7.0]
  def change
    create_table :kids do |t|
      t.references :family, null: false, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.text :description

      t.timestamps
    end
  end
end
