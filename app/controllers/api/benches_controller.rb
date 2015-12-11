class Api::BenchesController < ApplicationController
  def index
    render json: Bench.all
  end

  def create

  end
end
