class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true, length: { minimum: 7 }
  
  has_many :kids, foreign_key: "parent_id", dependent: :destroy
  has_many :parent_reservations, class_name: "Reservation", foreign_key: "parent_id", dependent: :destroy
  has_many :caregiver_reservations, class_name: "Reservation", foreign_key: "caregiver_id", dependent: :destroy
  has_many :reviews, foreign_key: "reviewer_id", dependent: :destroy
end
