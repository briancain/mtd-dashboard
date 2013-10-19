module DashboardHelper

  # Reads in the full stack yaml
  # and parses it
  def get_fullstack_config
    config = YAML.load_file('public/tmp/fullstack.yaml')
    nodes = []
    puts "######"
    puts "Fullstack YAML config hash"
    puts config.inspect

    puts "######"
    puts "Given Services defined in Fullstack yaml file"
    config['roles'].each do | roleType, value |
      puts "#{roleType}: #{value['name']}"
      nodes.push(value['name'])
    end

    nodes
  end

end
