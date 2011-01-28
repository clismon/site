class Admin::GroupsController < Admin::AdminController
  respond_to :html
  
  def index
  end
  
  def show
    @group = Group.find params[:id]
    respond_with @group
  end
end
