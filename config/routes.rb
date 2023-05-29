Rails.application.routes.draw do

  namespace :api do
    resources :kids
    resources :users
  end

  get 'match/MatchController'
  get 'match/index'
  resources :kids
  resources :users

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "match#index"
end
