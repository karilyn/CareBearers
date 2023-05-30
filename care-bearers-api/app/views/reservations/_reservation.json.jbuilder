json.extract! reservation, :id, :start_time, :end_time, :num_of_children, :city, :street, :post_code, :status, :cost, :stripe_charge_id, :caregiver_id, :parent_id, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)
