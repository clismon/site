class Admin::AdminController < ApplicationController
  layout 'admin'
  before_filter :load_groups#, :authenticate

  private
  def load_groups
    @groups = Group.all
  end

  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      username == Clismon.username && password == Clismon.password
    end
  end
end
