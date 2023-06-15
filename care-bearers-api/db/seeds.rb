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

# Create parent users
karilyn = User.create!(
  first_name: "Karilyn",
  last_name: "Kempton",
  email: "parent1@parent.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('1234'),
  description: "I am a parent looking for a babysitter to occasionally watch my two children.",
  gender: "female",
  photo_url: "https://picsum.photos/100/100",
  is_caregiver: false,
)

michele = User.create!(
  first_name: "Michele",
  last_name: "Schulz",
  email: "test@test.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('1234'),
  description: "Working professional looking for regular evening childcare.",
  gender: "female",
  is_caregiver: false,
  photo_url: "https://picsum.photos/100/100"
)

john = User.create!(
  first_name: "John",
  last_name: "Doe",
  email: "john@johndoe.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('1234'),
  description: "Father of three looking for some extra help!",
  gender: "male",
  is_caregiver: false,
  photo_url: "https://picsum.photos/100/100"
)

# Create babysitter users
amy = User.create!(
  first_name: "Amy",
  last_name: "Smith",
  email: "amy@babysitting.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('1234'),
  description: "I am a babysitter looking for a family to work with.",
  gender: "female",
  is_caregiver: true,
  photo_url: "https://picsum.photos/100/100"
)

sally = User.create!(
  first_name: "Sally",
  last_name: "Jones",
  email: "sally@jones.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('1234'),
  description: "I'm a barista and I love kids! Looking to make some extra money by helping families who need care.",
  gender: "female",
  is_caregiver: true,
  photo_url: "https://picsum.photos/100/100"
)

farah = User.create!(
  first_name: "Farah",
  last_name: "Khan",
  email: "farah@test.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('1234'),
  description: "I am a stay-at-home mom looking to care for some extra kids",
  gender: "female",
  is_caregiver: true,
  photo_url: "https://picsum.photos/100/100"
)

puts "Created #{User.count} users."

# Create Kids
johnny = Kid.create!(
  name: "Johnny",
  age: 5,
  description: "Spirited five year old who loves trucks and building things.",
  parent_id: parent1.id
)

ada = Kid.create!(
  name: "Ada",
  age: 3,
  description: "Three year old who loves to read and play with her dinosaurs.",
  parent_id: parent1.id
)

miles = Kid.create!(
  name: "Miles",
  age: 2,
  description: "Two year old who loves to play outside and go for walks.",
  parent_id: parent2.id
)

lily = Kid.create!(
  name: "Lily",
  age: 8,
  description: "Lily loves to play soccer and read books (on her own and with you!).",
  parent_id: parent3.id
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
  province: "BC",
  status: 0,
  cost: 80.00,
  stripe_charge_id: "ch_1J5JZn2eZvKYlo2C0QYQ0Q0Q",
  caregiver_id: amy.id,
  parent_id: karilyn.id
)

reservation2 = Reservation.create!(
  start_time: "2023-06-22 13:00:00",
  duration_in_minutes: 60,
  num_of_children: 2,
  city: "Revelstoke",
  street: "456 Main Street",
  post_code: "T0E2S0",
  province: "BC",
  status: 1,
  cost: 20.00,
  stripe_charge_id: "ch_1J5REn2eZvKYlo2C0QYQ0Q0Q",
  caregiver_id: amy.id,
  parent_id: karilyn.id
)
reservation3 = Reservation.create!(
  start_time: "2023-07-14 08:00:00",
  duration_in_minutes: 120,
  num_of_children: 1,
  city: "Coleman",
  street: "789 Main Street",
  post_code: "T0K0E0",
  province: "AB",
  status: 0,
  cost: 60.00,
  stripe_charge_id: "ch_1J3JZn2eZvKYlo2C0QYQ0Q0Q",
  caregiver_id: amy.id,
  parent_id: michele.id
)
reservation4 = Reservation.create!(
  start_time: "2023-06-13 19:00:00",
  duration_in_minutes: 60,
  num_of_children: 2,
  city: "Vancouver",
  street: "321 Main Street",
  post_code: "S0E2S0",
  province: "BC",
  status: 4,
  cost: 80.00,
  stripe_charge_id: "ch_1J5JZn2eZvKYlo2C0WNQ0Q0Q",
  caregiver_id: amy.id,
  parent_id: karilyn.id
)

reservation5 = Reservation.create!(
  start_time: "2023-06-05 15:30:00",
  duration_in_minutes: 60,
  num_of_children: 1,
  city: "Coleman",
  street: "321 Main Street",
  post_code: "T0K0E0",
  province: "AB",
  status: 4,
  cost: 80.00,
  stripe_charge_id: "ch_1J5JZn2eZwKYlo2C0WNQ0Q0Q",
  caregiver_id: amy.id,
  parent_id: michele.id
)

puts "Created #{Reservation.count} reservations."

# Create reviews

review1 = Review.create!(
  message: "Amy was great with our kids! She was on time and very friendly. We will definitely be booking her again.",
  rating: 5.0,
  reviewer_id: karilyn.id,
  reservation_id: reservation1.id
)

review2 = Review.create!(
  message: "Karilyn was cool as a cucumber and her kids were lots of fun to watch.",
  rating: 5.0,
  reviewer_id: amy.id,
  reservation_id: reservation1.id
)


review3 = Review.create!(
  message: "Karilyn paid promptly and was very appreciative of my help.",
  rating: 4.0,
  reviewer_id: amy.id,
  reservation_id: reservation2.id
)

review4 = Review.create!(
  message: "Amy was great with our kids. She ran a bit late though.",
  rating: 4.0,
  reviewer_id: karilyn.id,
  reservation_id: reservation2.id
)


review5 = Review.create!(
  message: "Amy was wonderful with Miles.  Will work with her in the future for sure!",
  rating: 4.5,
  reviewer_id: michele.id,
  reservation_id: reservation3.id
)

review6 = Review.create!(
  message: "Michele and her kids were a pleasure to work with.  Will work with them in the future for sure!",
  rating: 4.5,
  reviewer_id: amy.id,
  reservation_id: reservation3.id
)


review7 = Review.create!(
  message: "Karilyn had a lot of last minute requests which was stressful. Would communicate this before watching her kids again.",
  rating: 3.5,
  reviewer_id: amy.id,
  reservation_id: reservation4.id
)

review8 = Review.create!(
  message: "Amy had a lot of distracting phone calls this time my kids told me afterwards.",
  rating: 3.5,
  reviewer_id: karilyn.id,
  reservation_id: reservation4.id
)


review9 = Review.create!(
  message: "Michele was delightful and her kids were a blast.",
  rating: 4.5,
  reviewer_id: amy.id,
  reservation_id: reservation5.id
)

review10 = Review.create!(
  message: "Amy has a real talent, got my kid to nap!",
  rating: 4.5,
  reviewer_id: michele.id,
  reservation_id: reservation5.id
)

puts "Created #{Review.count} reviews."