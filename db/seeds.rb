# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed users
puts 'Seeding users 🧑‍🚀'
User.create({ first_name: 'Nic', last_name: 'Mortelliti', email: 'npm@gmail.com', password: '123',
              password_confirmation: '123' })

# Seed vehicles
puts 'Seeding vehicles 🚀'
Vehicle.create({ make: 'Jetson', model: 'S380', name: 'Astro', pax_capacity: 42, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S380', name: 'Rosie', pax_capacity: 42, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S380', name: 'Orbitty', pax_capacity: 42, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S380', name: 'George', pax_capacity: 42, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S380', name: 'Jane', pax_capacity: 42, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S380', name: 'Judy', pax_capacity: 42, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S380', name: 'Elroy', pax_capacity: 42, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S320', name: 'Mr. Spacely', pax_capacity: 6, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S320', name: 'R.U.D.I', pax_capacity: 6, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S320', name: 'Sentro', pax_capacity: 6, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S320', name: 'Harlan', pax_capacity: 6, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S320', name: 'DiDi', pax_capacity: 6, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S320', name: 'Uniblab', pax_capacity: 6, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S320', name: 'Miss Galaxy', pax_capacity: 6, image: 'placeholder' })
Vehicle.create({ make: 'Jetson', model: 'S320', name: 'Henry', pax_capacity: 6, image: 'placeholder' })

Vehicle.create({ make: 'Camacho', model: 'Thundercat', name: 'Jaga', pax_capacity: 12, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Thundercat', name: 'Lion-O', pax_capacity: 12, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Thundercat', name: 'Panthro', pax_capacity: 12, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Thundercat', name: 'Tygra', pax_capacity: 12, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Thundercat', name: 'Cheetara', pax_capacity: 12, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Thundercat', name: 'WilyKat', pax_capacity: 12, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Thundercat', name: 'Bengali', pax_capacity: 12, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Nimbus', name: 'Lynx-O', pax_capacity: 8, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Nimbus', name: 'Pumyra', pax_capacity: 8, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Nimbus', name: 'Claudus', pax_capacity: 8, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Nimbus', name: 'Jagara', pax_capacity: 8, image: 'placehodler' })
Vehicle.create({ make: 'Camacho', model: 'Nimbus', name: 'Snarf', pax_capacity: 8, image: 'placehodler' })

# Seed Locations
puts 'Seeding locations 🪐'
Location.create({ name: 'Portland', icao: 'KPDX', macro_place: 'Earth', dist_to_sun: 92_376_000 })
Location.create({ name: 'Boston', icao: 'KBOS', macro_place: 'Earth', dist_to_sun: 92_376_000 })
Location.create({ name: 'New York', icao: 'KJFK', macro_place: 'Earth', dist_to_sun: 92_376_000 })
Location.create({ name: 'London', icao: 'EGLL', macro_place: 'Earth', dist_to_sun: 92_376_000 })
Location.create({ name: 'Holden', icao: 'MCHN', macro_place: 'Mars', dist_to_sun: 138_450_000 })
Location.create({ name: 'Jezero', icao: 'MCJO', macro_place: 'Mars', dist_to_sun: 138_450_000 })
Location.create({ name: 'Bennu', icao: 'VVBU', macro_place: 'Venus', dist_to_sun: 67_199_000 })
Location.create({ name: 'Donut', icao: 'PVDT', macro_place: 'Pluto', dist_to_sun: 3_230_900_000 })
Location.create({ name: 'Dunes', icao: 'PDDF', macro_place: 'Pluto', dist_to_sun: 3_230_900_000 })
Location.create({ name: 'Ailey', icao: 'MCAY', macro_place: 'Mercury', dist_to_sun: 36_945_000 })
Location.create({ name: 'Dickens', icao: 'MCDN', macro_place: 'Mercury', dist_to_sun: 36_945_000 })
Location.create({ name: 'Poe', icao: 'MCPO', macro_place: 'Mercury', dist_to_sun: 36_945_000 })

# Seed flights
puts 'Seeding flights. This may take a while... 🛸'
# For each vehicle
Vehicle.all.each do |i|
  # Each vehicle has a random number of flights assigned to it
  rand(10..20).times do
    # Assign a random origin from location
    origin = Location.find(1 + rand(Location.count))

    # Assign a random destination from location that doesn't match origin
    destination = origin
    loop do
      destination = Location.find(1 + rand(Location.count))

      destination.macro_place != origin.macro_place && break
    end

    # Calculate distance from origin to destination
    dist = origin.dist_to_sun - destination.dist_to_sun

    # Assign random departure date/time over next 5 years
    departure = Time.now + rand(24..43_800).hours + rand(0..59).minutes

    # Calculate arrival datetime assuming average flight speed of 32,000 mph
    arrival = departure + (dist.abs / 32_000).hours
    Flight.create({
                    vehicle_id: i.id,
                    origin_id: origin.id,
                    destination_id: destination.id,
                    distance: dist.abs,
                    departure: departure,
                    arrival: arrival
                  })
  end
end

# Seed Reservations
puts 'Seeding reservations 🔖'
Reservation.create({ user_id: 1, flight_id: rand(1..Flight.all.count) })

puts 'Done seeding ✅'
