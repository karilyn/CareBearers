class User < ApplicationRecord
  has_secure_password
  
  has_many :kids, foreign_key: "parent_id", dependent: :destroy

end
