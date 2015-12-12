class Bench < ActiveRecord::Base
  validates :description, :lat, :long, presence: true

  def self.in_bounds(bounds)
    lat_min = bounds[:southwest]['lat']
    lat_max = bounds[:northeast]['lat']
    lng_min = bounds[:southwest]['lng']
    lng_max = bounds[:northeast]['lng']
    return self.where(lat: (lat_min..lat_max)).where(long: (lng_min..lng_max))
  end
end
