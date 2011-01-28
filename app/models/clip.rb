class Clip < ActiveRecord::Base
  belongs_to :group
  default_scope :order => 'name'

  def url
    @url ||= "#{Clismon.images}/#{group.name}/#{locator}"
  end
end
