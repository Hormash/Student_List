class Student < ApplicationRecord
    validates :student_rut, presence: true, :uniqueness => true
    validates :list_number, presence: true
end
