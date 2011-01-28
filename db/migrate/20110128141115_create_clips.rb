class CreateClips < ActiveRecord::Migration
  def self.up
    create_table :clips do |t|
      t.string :name, :required => true, :limit => 200
      t.references :group, :required => true
      t.integer :width, :default => 0
      t.integer :height, :default => 0
      t.string :url, :required => true, :limit => 600
      t.timestamps
    end

    add_index :clips, :name
  end

  def self.down
    drop_table :clips
  end
end
