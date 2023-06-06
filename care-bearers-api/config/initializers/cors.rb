Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3002'
    resource '*', headers: :any, methods: %i[get post put patch delete],
     credentials: true
  end
end