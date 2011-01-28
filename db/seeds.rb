

groups = YAML.load_file(File.join(Rails.root, "db/data", "groups.yml"))

groups.each do |group|
  attr = group['attributes']
  puts "#{attr['name']}"
end
