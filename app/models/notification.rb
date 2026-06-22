class Notification < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  validates :notification_type, presence: true
  validates :status, presence: true

  belongs_to :user
end
