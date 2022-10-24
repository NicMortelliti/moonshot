Rails.application.routes.draw do
  resources :flights, only: [:create, :index, :update, :destroy]
  resources :reservations, only: [:create, :index, :update, :destroy]
  resources :users, only: [:create, :index, :show, :update, :destroy]
  resources :vehicles, only: [:create, :index, :update, :destroy]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
