Types::StudentType = GraphQL::ObjectType.define do
    # this type is named `Link`
    name 'Student'
  
    # it has the following fields
    field :id, !types.ID
    field :student_rut, !types.String
    field :list_number, !types.Int
    field :present, !types.Boolean
  end