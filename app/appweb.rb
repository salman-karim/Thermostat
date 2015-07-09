
require 'sinatra/base'
require 'json'
require 'byebug'

class Appweb < Sinatra::Base

  get '/' do
    erb :index
  end

  get '/city'
    city = sessions[:city]
    {city: city}.to_json
  end


  post '/city' do
    session[:city] = params[:cityinput]
  end

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



end
