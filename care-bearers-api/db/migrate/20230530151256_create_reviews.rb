class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.float :rating
      t.text :message
      t.references :reservation, null: false, foreign_key: true
      t.references :reviewer, null: false

      t.timestamps
    end
    add_foreign_key :reviews, :users, column: :reviewer_id
  end
end
