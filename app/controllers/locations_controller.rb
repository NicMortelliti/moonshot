class LocationsController < ApplicationController
  def index
    locations = Location.all
    render json: locations
  end

  def origins
    locations = Location.all.select { |location| location.origins.count.positive? }

    render json: locations, status: :ok
  end

  def destinations
    locations = Location.all.select { |location| location.origins.any? { |each| each.destination_id == params[:origin].to_i } }

    render json: locations, status: :ok
  end
end
