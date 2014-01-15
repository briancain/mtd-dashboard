class Configure
  include Mongoid::Document
  field :name, type: String
  field :content, type: String
  field :current_config, type: Boolean
end
