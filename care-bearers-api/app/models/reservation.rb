class Reservation < ApplicationRecord
  belongs_to :caregiver, class_name: "User"
  belongs_to :parent, class_name: "User"
  has_many :reviews, dependent: :destroy
  enum status: [:pending, :accepted, :rejected, :canceled, :completed]
end

def duration_in_hours=(hours)
  self.duration_in_minutes = hours.to_i * 60
end
