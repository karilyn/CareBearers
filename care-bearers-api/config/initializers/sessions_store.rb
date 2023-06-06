if Rails.env == 'production'
  Rails.application.config.session_store :cookie_store, key: '_care-bearers-api', domain: 'care-bearers-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_care-bearers-api'
end