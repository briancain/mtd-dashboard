# Setup

This is a simple guide for setting up the dashboard.

## RVM Installation

    $ \curl -L https://get.rvm.io | bash -s stable

More information about rvm can be read from the [official site](http://rvm.io/).

### Ruby 1.9.3

My dashboard was developed using ruby 1.9.3.

    $ rvm install 1.9.3

### Rails 3.2.x

And was using Rails 3.2.

    $ gem install rails -v 3.2.14

### Install Gems

First, use rvm to use a gemset (if you want). This is important if you do not want to worry about installing gems between different projects each time.

    $ rvm use 1.9.3@a_random_name --create
    $ bundle install

### Get MongoDB

We need MongoDB for the user database.

If you are using OSX and Brew....

    $ brew install mongodb

Read the install notes after it has finished. It will tell you how to launch MongoDB.

### Seed Database

We need to seed our database with a few base users so we can log in.

    $ rake db:mongoid:create_indexes
    $ rake db:seed

### Launch Rails

Launch rails and then navigate to localhost.

    $ rails s
