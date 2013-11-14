# Automated Enterprise Network Compiler Dashboard

A front end dashboard framework for Moving Target Defense and ANCOR.

### Project Status

[![Build Status](https://travis-ci.org/briancain/mtd-dashboard.png?branch=master)](https://travis-ci.org/briancain/mtd-dashboard)

## About Project

The goal of this project is to provide a usable interface that makes interacting with the Moving Target Defense project easier along with providing a general overview of the system in a typical _dashboard_ style view.

## Up and Running

RVM is recommended while running this project. First, this project is only going to support Ruby 1.9.3. 1.8.7/2.0.0 might work, but I won't be testing against it. Next, make sure you have mongoDB installed and running ( __NOTE__ : This may not be a trivial task if you are using OSX. It seems like brew and ports don't provide the components required to get mongo up and running....however apt-get is able to set up mongo just fine). Now to get all of the gems installed do a simple:

    $ bundle install

Next we're going to seed the db with a single user:

    $ rake db:mongoid:create_indexes
    $ rake db:seed

If you wish to add more users to seed, or want to change the default, go into `db/seeds.rb` to change things.

Finally it should be able to run, so start up rails:

    $ rails s

It should tell you what port it's currently being served on.

## Additional Frameworks

Other frameworks used in this project

- [ACE](http://ace.c9.io/)
- [AngularJS](http://www.angularjs.org/)
- [Capybara](https://github.com/jnicklas/capybara)
- [D3JS](http://d3js.org/)
- [Devise](https://github.com/plataformatec/devise)
- [Jbuilder](https://github.com/rails/jbuilder)
- [LESS Rails](https://rubygems.org/gems/less-rails)
- [Mongoid](http://mongoid.org/en/mongoid/index.html)
- [Twitter Bootstrap 3.0](http://getbootstrap.com/)

## More information

### Dashboard Views

#### Home View

After authenticating, the user should be presented with an overview of the system. This will hopefully consist of different graphs that give the user an idea of the 'health' of the system.

#### Manage View

This view will be where a user can manage their ANCOR system. Currently, it is being used to show off different demo element features that could be integrated into the final product.

Another view will show the configuration visualization demo that will depend on what the fullstack.yaml will look like.

#### Admin View

Contains a User view where an admin can see all users on the system...when they last logged in and the ip it was from, they can email the users if they want to...or "edit" or "disable" a user.
