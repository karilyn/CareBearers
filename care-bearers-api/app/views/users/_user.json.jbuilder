json.extract! user, :id, :first_name, :last_name, :email, :postal_code, :password_digest, :recovery_password_digest, :description, :photo_url, :gender, :created_at, :updated_at
json.url user_url(user, format: :json)
