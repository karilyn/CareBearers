class Review < ApplicationRecord
  belongs_to :reservation
  belongs_to :reviewer, class_name: "User"
end
