Rails.application.routes.draw do
  resources :comments
  resources :posts do
    resources :comments
  end
  resources :users do
    resources :posts
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
