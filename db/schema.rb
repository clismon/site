# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110128141115) do

  create_table "clips", :force => true do |t|
    t.string   "name",       :limit => 200
    t.integer  "group_id"
    t.integer  "width",                     :default => 0
    t.integer  "height",                    :default => 0
    t.string   "locator",    :limit => 200
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "clips", ["name"], :name => "index_clips_on_name"

  create_table "groups", :force => true do |t|
    t.string   "name",       :limit => 200
    t.string   "title",      :limit => 200
    t.string   "color",                     :default => "#000"
    t.integer  "bg_width"
    t.integer  "bg_height"
    t.string   "bg_locator", :limit => 500
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "groups", ["name"], :name => "index_groups_on_name"

end
