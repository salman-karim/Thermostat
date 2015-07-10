
require 'sinatra/base'
require 'json'
require 'byebug'

class Appweb < Sinatra::Base

enable :sessions

  get '/' do
    session[:city] ? @city = session[:city] : @city = 'London'
    session[:tempsetting] ? @tempsetting = session[:tempsetting] : @tempsetting = 20
    erb :index
  end

  # get '/city'
  #   city = sessions[:city]
  #   {city: city}.to_json
  # end

  post '/city' do
    selected_city = params[:cityinput]
    session[:city] = selected_city
  end

  post '/temperature' do
    temp = params[:tempsetting]
    session[:tempsetting] = temp
  end

  # get '/settings' do
  #   tempsetting = session[:tempsetting]
  #   city = session[:city]
  #   { city: city, tempsetting = tempsetting}.to_json
  # end
  #






  # get '/city'
  #
  # end


 # get '/user' do
 #    content_type :json
 #    name = params[:name]
 #    # city = params[:city]
 #    powersaver = params[:powersaver]
 #    {name: name, city: city}.to_json
 #  end


 run! if app_file == $0
end
