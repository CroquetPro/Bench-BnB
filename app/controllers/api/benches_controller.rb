class Api::BenchesController < ApplicationController
  def index
    bounds = {northeast: params['northeast'],
              southwest: params['southwest']}
    render json: Bench.in_bounds(bounds)
  end

  def create

  end
end
