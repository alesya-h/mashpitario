#!/usr/bin/env ruby
require 'rubygems'
require 'sinatra'
set :public, File.dirname(__FILE__)
get '/' do
  "index"
end
