class ChangeEndDateToDuration < ActiveRecord::Migration[7.0]
  def change
    rename_column :reservations, :end_time, :duration_in_minutes
    change_column :reservations, :duration_in_minutes, :integer
  end

end
