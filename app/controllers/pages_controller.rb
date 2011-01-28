class PagesController < ApplicationController

  def portada
    response.headers['Cache-Control'] = 'public, max-age=30000'
  end

  def section
    response.headers['Cache-Control'] = 'public, max-age=30000'
    @group = Group.find_by_name(params[:id])
  end

  def trabajando
    response.headers['Cache-Control'] = 'public, max-age=30000'
  end
end
