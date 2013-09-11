# Moving Target Defense Dashboard

A front end dashboard framework for Moving Target Defense.

### Project Status

[![Build Status](https://travis-ci.org/briancain/mtd-dashboard.png?branch=master)](https://travis-ci.org/briancain/mtd-dashboard)

## About Project

The goal of this project is to provide a usable interface that makes interacting with the Moving Target Defense project easier along with providing a general overview of the system in a typical _dashboard_ style view.

## Up and Running

RVM is recommended while running this project. First, this project is only going to support Ruby 1.9.3. 1.8.7/2.0.0 might work, but I won't be testing against it. Next, make sure you have mongoDB installed and running. Now to get all of the gems installed do a simple:

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

- [AngularJS](http://www.angularjs.org/)
- [AngularUI](http://angular-ui.github.io/)
- [Capybara](https://github.com/jnicklas/capybara)
- [Devise](https://github.com/plataformatec/devise)
- [Jbuilder](https://github.com/rails/jbuilder)
- [LESS Rails](https://rubygems.org/gems/less-rails)
- [Mongoid](http://mongoid.org/en/mongoid/index.html)

## More information

TBD
