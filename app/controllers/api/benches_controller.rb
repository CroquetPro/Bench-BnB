class Api::BenchesController < ApplicationController
  def index
    bounds = { northeast: params['bounds']['northeast'],
               southwest: params['bounds']['southwest'] }
    seating = { min: params['seating']['min'],
                max: params['seating']['max'] }

    render json: Bench.in_params(bounds, seating)
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
