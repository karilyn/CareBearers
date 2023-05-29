class Kid < ApplicationRecord
  belongs_to :parent, class_name: "User", foreign_key: "parent_id"
end
