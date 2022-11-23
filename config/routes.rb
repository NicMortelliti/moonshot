Rails.application.routes.draw do
  resources :locations
  resources :flights, only: %i[create index update destroy]
  resources :reservations, only: %i[create index update destroy]
  resources :users, only: %i[create index update destroy]
  resources :vehicles, only: %i[create index update destroy]
  resource :sessions # Singular resource allows destroy action without session ID

  get '/me', to: 'users#show'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
