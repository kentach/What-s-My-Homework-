class HomeworksController < ApplicationController
  def index
    @classrooms = Classroom.all #タブ作成
  end
end
