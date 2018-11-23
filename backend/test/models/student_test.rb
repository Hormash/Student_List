require 'test_helper'

class StudentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end


  test "should not save student without rut" do
    stu = Student.new
    assert_not stu.save
  end

  test "should not save student without list number" do
    stu = Student.new
    assert_not stu.save
  end
end
