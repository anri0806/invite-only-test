Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  resources :users, only: [:index]
  resources :posts, only: [:index, :show, :create, :destroy]
  resources :groups, only: [:index, :create]

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
