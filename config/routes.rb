Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  get "up" => "rails/health#show", as: :rails_health_check

  devise_for :users, skip: [:sessions]
  
  post 'sign_in' => 'sessions#create', as: :sign_in

  resources :game_rooms, only: [:index]
  resources :games, only: [:index] 

  # root "posts#index"
end
