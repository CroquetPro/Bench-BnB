# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
benches = [
       { description: "Papalote", lat: 37.775785, long: -122.445979 },
       { description: "The Little Chihuahua", lat: 37.772045, long: -122.437015 },
       { description: "Cancun", lat: 37.781899, long: -122.410426 }
     ];

benches.each{ |bench| Bench.create(bench) }
