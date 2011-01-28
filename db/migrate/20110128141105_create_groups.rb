class CreateGroups < ActiveRecord::Migration
  def self.up
    create_table :groups do |t|
      t.string :name, :required => true, :limit => 200
      t.string :title, :required => true, :limit => 200
      t.string :color, :required => true, :default => '#000'
      t.integer :bg_width
      t.integer :bg_height
      t.string :bg_locator, :limit => 500
      t.timestamps
    end

    add_index :groups, :name
  end

  def self.down
    drop_table :groups
  end
end
