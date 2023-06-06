Rails.application.routes.draw do
  resources :reviews
  resources :reservations
  resources :kids

  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  resources :users, only: [:create, :show, :index] do
    resources :items, only: [:create, :show, :index, :destroy]
  end
  resources :reservations
  resources :reviews


  get 'match/MatchController'
  get 'match/index'
  resources :kids
  resources :users

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "match#index"
end
