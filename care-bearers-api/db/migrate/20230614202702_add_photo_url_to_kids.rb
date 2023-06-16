class AddPhotoUrlToKids < ActiveRecord::Migration[7.0]
  def change
    add_column :kids, :photo_url, :string
  end
end
