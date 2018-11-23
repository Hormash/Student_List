Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  
  field :createStudent, Types::StudentType do
    description 'Allows you to create a new student'
    argument :student_rut, !types.String
    argument :list_number, !types.Int

    resolve -> (obj, args, ctx){
      Student.create(
        student_rut: args[:student_rut],
        list_number: args[:list_number],
        present: false
      )
    }
  
  end

  field :is_present, Types::StudentType do
    description 'Allows you to define is a student is present or not'
    
    argument :id, !types.ID

    resolve -> (obj, args, ctx){
      stu = Student.find(args[:id])
      stu.update_attribute(:present, !stu.present )
      Student.find(args[:id])
    }
  
  end

  field :update_rut, Types::StudentType do
    
    argument :old_student_rut, !types.String
    argument :new_student_rut, !types.Int
    argument :id, !types.ID

    resolve -> (obj, args, ctx){
      Student.where(["student_rut = ?", args[:student_rut] ])
      stu = Student.where(["student_rut = ?", args[:old_student_rut] ]).first
      stu.update_attribute(:student_rut, args[:new_student_rut] )
      Student.where(["student_rut = ?", args[:old_student_rut] ]).first
    }
  end

  field :delete, Types::StudentType do
    argument :student_rut, !types.String
    resolve -> (obj, args, ctx){
      (Student.where(["student_rut = ?", args[:student_rut] ]).first).destroy
    }
  end

  field :update_list_number, Types::StudentType do
    description 'Allows you to change the list number from one student'

    argument :new_list_number, !types.String
    argument :student_rut, !types.String

    resolve -> (obj, args, ctx){

      stu = Student.where(["student_rut = ?", args[:student_rut] ] ).first
      stu.update_attribute(:list_number, args[:new_list_number] )
      Student.where(["student_rut = ?", args[:student_rut] ] ).first
    }
  end
  
end
