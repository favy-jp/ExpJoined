Rails.application.routes.draw do
  root 'top#index'
  resources :brands do
    collection do
      get 'adidas'
    end
  end
end
