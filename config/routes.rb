Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  resources :game_rooms, only: [:index]

  # root "posts#index"
end
