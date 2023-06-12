# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_12_204955) do
  create_table "kids", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "parent_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.datetime "start_time"
    t.integer "duration_in_minutes"
    t.integer "num_of_children"
    t.string "city"
    t.string "street"
    t.string "post_code"
    t.integer "status"
    t.float "cost"
    t.string "stripe_charge_id"
    t.integer "caregiver_id", null: false
    t.integer "parent_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["caregiver_id"], name: "index_reservations_on_caregiver_id"
    t.index ["parent_id"], name: "index_reservations_on_parent_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.float "rating"
    t.text "message"
    t.integer "reservation_id", null: false
    t.integer "reviewer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reservation_id"], name: "index_reviews_on_reservation_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "postal_code"
    t.string "password_digest"
    t.text "description"
    t.string "photo_url"
    t.string "gender"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_caregiver"
  end

  add_foreign_key "reservations", "users", column: "caregiver_id"
  add_foreign_key "reservations", "users", column: "parent_id"
  add_foreign_key "reviews", "reservations"
  add_foreign_key "reviews", "users", column: "reviewer_id"
end
