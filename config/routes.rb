Rails.application.routes.draw do

  resources :users, only: [:index]
  resources :posts, only: [:index, :show, :create, :destroy]
  resources :groups, only: [:index, :show, :create]
  resources :comments, only: [:index, :show, :create, :update, :destroy]

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/group_posts/:id", to: "posts#group_posts"
  get "/group_comments/:id", to: "comments#group_comments"
  get "/user_posts/:id", to: "posts#user_posts"
  get "/get_users/:id", to: "users#get_users"
  # get "/get_group/:id", to: "groups#get_group"

  devise_for :users, path: '', path_names: {
    registration: 'signup',
    invitation: 'users_invitations'
  },
  controllers: { 
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    invitations: 'users_invitations' 
  }

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
