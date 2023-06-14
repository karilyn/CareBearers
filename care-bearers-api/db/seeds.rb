# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "Seeding Data ..."


# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# Create Users

# Create an admin user
admin = User.create!(
  first_name: "Admin",
  last_name: "User",
  email: "admin@admin.com",
  password_digest: BCrypt::Password.create('Your_Password')
)

puts "Admin user created: #{admin.inspect}"

# Create parent users
parent1 = User.create!(
  first_name: "Karilyn",
  last_name: "Kempton",
  email: "parent1@parent.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "I'm looking for a babysitter to occasionally watch my two delightful children, mostly later evenings and occasional weekends. FYI, we have a well-behaved dog and cat in case you're allergic.",
  gender: "female",
  is_caregiver: false,
  photo_url: "https://picsum.photos/100/100"
)

parent2 = User.create!(
  first_name: "Michele",
  last_name: "Schulz",
  email: "test@test.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "Working professional looking for regular evening childcare.",
  gender: "female",
  is_caregiver: false,
  photo_url: "https://picsum.photos/100/100"
)

parent3 = User.create!(
  first_name: "John",
  last_name: "Doe",
  email: "john@johndoe.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "Father of three looking for some extra help over summer holidays!",
  gender: "male",
  is_caregiver: false,
  photo_url: "https://picsum.photos/100/100"
)

# Create babysitter users
babysitter1 = User.create!(
  first_name: "Amy",
  last_name: "Smith",
  email: "amy@babysitting.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "I am an energetic, easy-going babysitter looking for families to work with. I'm a full-time university student. I love kids and I have a lot of experience.",
  gender: "female",
  is_caregiver: true,
  photo_url: "https://picsum.photos/100/100"
)

babysitter2 = User.create!(
  first_name: "Sally",
  last_name: "Jones",
  email: "sally@jones.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "I'm a barista and I just really love kids! I've got tons of energy (must be the coffee!) Looking to make some extra money. I have a bunch of neices and newphews!",
  gender: "female",
  is_caregiver: true,
  photo_url: "https://picsum.photos/100/100"
)

babysitter3 = User.create!(
  first_name: "Farah",
  last_name: "Khan",
  email: "farah@test.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "I am a stay-at-home parent looking to care for some extra kids in my own home. I've got a big backyard and lots of toys, and two kids of my own (6 and 8). I'm available during the day and on weekends.",
  gender: "female",
  is_caregiver: true,
  photo_url: "https://picsum.photos/100/100"
)

puts "Created #{User.count} users."

# Create Kids
kid1 = Kid.create!(
  name: "Johnny",
  age: 5,
  description: "Johnny is a spirited five year old who loves trucks, building things, and having living room dance parties with glow sticks. He's a total sweetheart and a really funny kid. He asks a LOT of questions!",
  parent_id: parent1.id,
  photo_url: "https://picsum.photos/100/100"
)

kid2 = Kid.create!(
  name: "Ada",
  age: 3,
  description: "She's three years old and really loves to read books with you. She's a total snugglebug and she's super easy to put down for naps and bedtime. She likes to play with dinosaurs. She's got a peanut allergy so we're a nut-free house.",
  parent_id: parent1.id,
  photo_url: "https://picsum.photos/100/100",
)

kid3 = Kid.create!(
  name: "Lily",
  age: 2,
  description: "Two year old who loves to play outside and go for walks to the playground.",
  parent_id: parent2.id,
  photo_url: "https://picsum.photos/100/100"
)

kid4 = Kid.create!(
  name: "Riley",
  age: 8,
  description: "Riley loves to play soccer and read books (on his own and with you!). He will probably ask you to play video games with him, but he's not allowed to play for more than 30 minutes a day. He's a really sweet kid and he's very helpful. He gets an hour of Minecraft time after he finishes his homework.",
  parent_id: parent3.id,
  photo_url: "https://picsum.photos/100/100"
)

puts "Created #{Kid.count} kids."

# Create Reservations

reservation1 = Reservation.create!(
  start_time: "2023-08-01 18:00:00",
  duration_in_minutes: 60,
  num_of_children: 2,
  city: "Vancouver",
  street: "123 Main Street",
  post_code: "V0E2S0",
  status: 4,
  cost: 80.00,
  stripe_charge_id: "ch_1J5JZn2eZvKYlo2C0QYQ0Q0Q",
  caregiver_id: babysitter1.id,
  parent_id: parent1.id
)

# puts "Reservation created: #{reservation1.inspect}"

reservation2 = Reservation.create!(
  start_time: "2023-06-22 13:00:00",
  duration_in_minutes: 60,
  num_of_children: 2,
  city: "Revelstoke",
  street: "456 Main Street",
  post_code: "T0E2S0",
  status: 1,
  cost: 20.00,
  stripe_charge_id: "ch_1J5REn2eZvKYlo2C0QYQ0Q0Q",
  caregiver_id: babysitter2.id,
  parent_id: parent1.id
)
reservation3 = Reservation.create!(
  start_time: "2023-07-14 08:00:00",
  duration_in_minutes: 120,
  num_of_children: 1,
  city: "Banff",
  street: "789 Main Street",
  post_code: "W0E2S0",
  status: 0,
  cost: 60.00,
  stripe_charge_id: "ch_1J3JZn2eZvKYlo2C0QYQ0Q0Q",
  caregiver_id: babysitter3.id,
  parent_id: parent1.id
)
reservation4 = Reservation.create!(
  start_time: "2023-06-24 19:00:00",
  duration_in_minutes: 60,
  num_of_children: 2,
  city: "Vancouver",
  street: "321 Main Street",
  post_code: "S0E2S0",
  status: 2,
  cost: 80.00,
  stripe_charge_id: "ch_1J5JZn2eZvKYlo2C0WNQ0Q0Q",
  caregiver_id: babysitter1.id,
  parent_id: parent2.id
)

puts "Created #{Reservation.count} reservations."

# Create reviews

review1 = Review.create!(
  message: "Amy was great with our kids! She was on time and very friendly. We will definitely be booking her again.",
  rating: 5.0,
  reviewer_id: parent2.id,
  reservation_id: reservation1.id
)

review2 = Review.create!(
  message: "Sally was great with our kids. She ran late though and didn't seem prepared.",
  rating: 3.0,
  reviewer_id: parent1.id,
  reservation_id: reservation2.id
)

review3 = Review.create!(
  message: "Karilyn and her kids were a pleasure to work with.  Will work with them in the future for sure!",
  rating: 5.0,
  reviewer_id: babysitter2.id,
  reservation_id: reservation2.id
)

review4 = Review.create!(
  message: "Michele had a lot of last minute requests which was stressful. Would communicate this before watching her kids again.",
  rating: 3.5,
  reviewer_id: babysitter1.id,
  reservation_id: reservation1.id
)

puts "Created #{Review.count} reviews."