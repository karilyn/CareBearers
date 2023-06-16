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

ActiveRecord::Schema[7.0].define(version: 2023_06_15_170511) do
  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "kids", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "parent_id"
    t.string "photo_url"
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
    t.string "province"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "reservations", "users", column: "caregiver_id"
  add_foreign_key "reservations", "users", column: "parent_id"
  add_foreign_key "reviews", "reservations"
  add_foreign_key "reviews", "users", column: "reviewer_id"
end
