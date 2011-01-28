## Import
class Import

  def initialize
    import_groups
    import_clips
    assign_backgrounds
  end

  def import_groups
    yml = YAML.load_file(File.join(Rails.root, "db/data", "groups.yml"))

    yml.each do |data|
      attr = data['attributes']
      create_group (attr['name'], attr['title'], attr['color'])
    end
  end

  def import_clips
    puts "CLIPS"
    File.readlines(File.join(Rails.root, "db/data", "clips.txt")).each do |line|
      split = line.split('|')
      create_clip(split[0], split[1], split[2], split[3], split[4])
    end
  end

  def assign_backgrounds
    fondos = Group.find_by_name('fondos')
    Group.all.each do |group|
      clip = fondos.clips.find_by_name(group.name)
      if clip
      group.bg_locator = clip.locator
      group.bg_width = clip.width
      group.bg_height = clip.height
      group.save
      end
    end

    fondos.clips.destroy_all
    fondos.destroy

  end

  def create_clip(name, group_name, width, height, locator)
    locator.strip!
    group = Group.find_by_name(group_name)
    #puts "CLIPE #{name}:#{group.name}:#{width}:#{height}:#{locator}"
    clip = Clip.create!(:name => name, :group_id => group.id, :width => width, :height => height, :locator => locator)
  end

  def create_group(name, title, color)
    puts "GROUP #{name} - #{title} -  #{color}"
    group = Group.create!(:name => name, :title => title, :color => color)
  end
end

Import.new