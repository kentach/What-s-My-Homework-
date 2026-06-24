class Admin::UserSessionsController < Admin::BaseController
  skip_before_action :authenticate_user!
  skip_before_action :authenticate_admin!
  layout 'layouts/admin_login'

  def destroy
    reset_session
    redirect_to admin_login_path, status: :see_other, notice: "ログアウトしました。"
  end
end