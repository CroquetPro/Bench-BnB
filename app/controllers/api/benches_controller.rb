class Api::BenchesController < ApplicationController
  def index
    bounds = {northeast: params['northeast'],
              southwest: params['southwest']}
    render json: Bench.in_bounds(bounds)
  end

  def create
    bench = Bench.create({
              lat: params['lat'],
              long: params['long'],
              description: params['description'],
              seating: params['seating']
              })
    render json: bench
  end

end
