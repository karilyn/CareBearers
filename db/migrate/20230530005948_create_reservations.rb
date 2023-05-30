class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.integer :num_of_children
      t.string :city
      t.string :street
      t.string :post_code
      t.integer :status
      t.float :cost
      t.string :stripe_charge_id
      t.references :caregiver, null: false
      t.references :parent, null: false

      t.timestamps
    end
    add_foreign_key :reservations, :users, column: :caregiver_id
    add_foreign_key :reservations, :users, column: :parent_id
  end
end
