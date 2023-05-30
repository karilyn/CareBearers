class Reservation < ApplicationRecord
  belongs_to :caregiver
  belongs_to :parent

  enum status: [:pending, :accepted, :rejected, :canceled, :completed]
end
