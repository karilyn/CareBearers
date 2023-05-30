Rails.application.routes.draw do
  resources :reviews
  resources :reservations

  namespace :api do
    resources :kids
    resources :users
    resources :reservations
    resources :reviews
  end

  get 'match/MatchController'
  get 'match/index'
  resources :kids
  resources :users

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "match#index"
end
