class Reservation < ApplicationRecord
  belongs_to :caregiver, class_name: "User"
  belongs_to :parent, class_name: "User"
  has_many :reviews, dependent: :destroy
  enum status: [:pending, :accepted, :rejected, :canceled, :completed]
end
