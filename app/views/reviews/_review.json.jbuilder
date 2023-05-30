json.extract! review, :id, :rating, :message, :reservation_id, :reviewer_id, :created_at, :updated_at
json.url review_url(review, format: :json)
