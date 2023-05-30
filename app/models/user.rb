class User < ApplicationRecord
  has_secure_password
  
  has_many :kids, foreign_key: "parent_id", dependent: :destroy
  has_many :parent_reservations, class_name: "Reservation", foreign_key: "parent_id", dependent: :destroy
  has_many :caregiver_reservations, class_name: "Reservation", foreign_key: "caregiver_id", dependent: :destroy
end
