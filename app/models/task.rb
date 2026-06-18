class Task < ApplicationRecord
  validates :name, presence: true

  has_one_attached :pdf

  belongs_to :homework
  has_many :task_completions, dependent: :destroy
end
