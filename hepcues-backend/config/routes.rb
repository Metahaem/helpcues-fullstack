Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :acts, only: [:index, :show, :create]
      resources :users, only: [:index, :show, :create]
      resources :categories, only: [:index]
      post 'done', to: 'acts#increase_done_count'
      post 'user-done', to: 'users#increase_done_count'
    end
  end
end
