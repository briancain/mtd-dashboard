require 'pp'

module DashboardHelper

  # Reads in the full stack yaml
  # and parses it
  def get_fullstack_config
    config = YAML.load_file('public/tmp/fullstack.yaml')
    nodes = []
    # puts "######"
    # puts "Fullstack YAML config hash"
    # puts config.inspect

    # puts "######"
    # puts "Given Services defined in Fullstack yaml file"
    config['roles'].each do | role_type, value |
      # puts "#{role_type}: #{value['name']}"
      nodes.push(value['name'])
    end

    nodes
  end

  # Gets user defined yaml config
  # to extract import/exports so
  # dashboard can draw node graph
  def get_import_export_map
    config = YAML.load_file('public/tmp/fullstack.yaml')
    node_map = {}

    # Obtain node exports/imports
    config['roles'].each do | role_type, value |
      puts "#{role_type}: #{value['name']}"
      # puts "Node Exports: #{value['exports']}"
      # puts "Node Imports: #{value['imports']}"
      unless value['exports'].nil?
        value['exports'].each do | export |
          puts "Export: #{export}"
        end
      end
      unless value['imports'].nil?
        value['imports'].each do | import |
          puts "Import: #{import}"
        end
      end
      puts "\n"
    end
  end

  # Gets instance data from ANCOR project
  # in JSON format.
  #
  # Will eventually be gathering this data through
  # a REST API. For now, will read from local
  # directory
  def get_instance_data
    instance_data = JSON.parse(IO.read('public/ancor-api-sample/instances/528527014c9be8da23000001.json'))
    instance_data_hash = {}
    import_hash = {}
    export_hash = {}
    data_hash = {}

    # pp instance_data

    instance_data.each do |instance, data|
      if instance == 'imports'
        import_hash[instance] = data
      elsif instance == 'exports'
        export_hash[instance] = data
      else
        instance_data_hash[instance] = data
      end
    end

    data_hash['data'] = instance_data_hash
    data_hash['import'] = import_hash
    data_hash['export'] = export_hash

    pp data_hash

    data_hash
  end

  def get_instance_status
    instance_status = JSON.parse(IO.read('public/ancor-api-sample/instances.json'))

    pp instance_status
  end

end
