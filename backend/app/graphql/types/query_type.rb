Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  # TODO: remove me
  field :allStudents, !types[Types::StudentType] do
    description 'Get all the students'
    resolve -> (obj, args, ctx) { Student.all }
  end

  field :allStudents_sort, !types[Types::StudentType] do
    description 'Get all the students order by his list number'
    resolve -> (obj, args, ctx) { Student.order(:list_number) }
  end

  field :get_student_by_rut, Types::StudentType do
    
    description 'Allows you to get the student info by rut'

    argument :student_rut, !types.String
    resolve -> (obj, args, ctx) { Student.where( ["student_rut = ?", args[:student_rut] ] ).first }
                                                                                            
  end
  
  field :get_student_by_list, Types::StudentType do
    
    description 'Allows you to get the student info by list number'

    argument :list_number, !types.Int
    resolve -> (obj, args, ctx) { Student.where( ["list_number = ?", args[:list_number] ] ).first }
    
  end

end
