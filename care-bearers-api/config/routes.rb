Rails.application.routes.draw do
  resources :reviews
  resources :reservations

  resources :users, only: [:create, :index, :show, :update, :destroy]
  post '/login', to: 'users#login'
  get '/auto_login', to: 'users#auto_login'

  get 'match/MatchController'
  get 'match/index'
  resources :kids


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "match#index"
end
