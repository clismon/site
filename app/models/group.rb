class Group < ActiveRecord::Base
  has_many :clips

  def bg_url
    @url ||= "#{Clismon.images}/fondos/#{bg_locator}"
  end  
end
