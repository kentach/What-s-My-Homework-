module NotificationsHelper
  def notification_type_color(notification)
    case notification.notification_type
    when "correction"   then "#ef4444"  # 赤
    when "monthly_test" then "#f59e0b"  # 黄
    else                     "#38bdf8"  # 青
    end
  end
end
