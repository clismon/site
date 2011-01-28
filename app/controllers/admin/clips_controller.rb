class Admin::ClipsController < Admin::AdminController
  before_filter :load_group
  
  def index
    @clips = @group.clips
  end
  
  
  protected
  def load_group
    @group = Group.find params[:group_id]
  end
end
