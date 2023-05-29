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
  description: "I am a parent looking for a babysitter to occasionally watch my two children.",
  gender: "female"
)

parent2 = User.create!(
  first_name: "Michele",
  last_name: "Schulz",
  email: "test@test.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "Working professional looking for regular evening childcare.",
  gender: "female"

)

parent3 = User.create!(
  first_name: "John",
  last_name: "Doe",
  email: "john@johndoe.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "Father of three looking for some extra help!",
  gender: "male"
)

# Create babysitter users
babysitter1 = User.create!(
  first_name: "Amy",
  last_name: "Smith",
  email: "amy@babysitting.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "I am a babysitter looking for a family to work with.",
  gender: "female"
)

babysitter2 = User.create!(
  first_name: "Sally",
  last_name: "Jones",
  email: "sally@jones.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "I'm a barista and I love kids! Looking to make some extra money by helping families who need care.",
  gender: "female"
)

babysitter3 = User.create!(
  first_name: "Farah",
  last_name: "Khan",
  email: "farah@test.com",
  postal_code: "V0E2S0",
  password_digest: BCrypt::Password.create('Your_Password'),
  description: "I am a stay-at-home mom looking to care for some extra kids",
  gender: "female"
)

puts "Created #{User.count} users."

# Create Kids
kid1 = Kid.create!(
  name: "Johnny",
  age: 5,
  description: "Spirited five year old who loves trucks and building things.",
  parent_id: parent1.id
)

kid2 = Kid.create!(
  name: "Ada",
  age: 3,
  description: "Three year old who loves to read and play with her dinosaurs.",
  parent_id: parent1.id
)

kid3 = Kid.create!(
  name: "Miles",
  age: 2,
  description: "Two year old who loves to play outside and go for walks.",
  parent_id: parent2.id
)

kid4 = Kid.create!(
  name: "Lily",
  age: 8,
  description: "Lily loves to play soccer and read books (on her own and with you!).",
  parent_id: parent3.id
)

puts "Created #{Kid.count} kids."
