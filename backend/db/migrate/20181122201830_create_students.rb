class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :student_rut
      t.integer :list_number
      t.boolean :present, :default => false

      t.timestamps
    end
  end
  
  
end
