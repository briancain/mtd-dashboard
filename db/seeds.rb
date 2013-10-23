# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts 'SETTING UP DEFAULT USER LOGIN'
user = User.create! :name => 'brian', :email => 'bccain@ksu.edu', :password => 'password', :password_confirmation => 'password'
puts 'New user created: ' << user.name
user = User.create! :name => 'admin', :email => 'admin@ksu.edu', :password => 'roottoor', :password_confirmation => 'roottoor'
puts 'New user created: ' << user.name
user = User.create! :name => 'ksucis', :email => 'ksucis@ksu.edu', :password => 'ihavenopassword', :password_confirmation => 'ihavenopassword'
puts 'New user created: ' << user.name
