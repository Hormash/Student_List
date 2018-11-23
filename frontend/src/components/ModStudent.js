import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const UPDATE_RUT_MUTATION = gql`
mutation UpdateMutation($student_rut: String!){
    update_rut(student_rut: $student_rut) {
      student_rut
      list_number
    }
  }
`

const DELETE_MUTATION = gql`
mutation DeleteMutation($student_rut: String!){
    delete(student_rut: $student_rut) {
      student_rut
      list_number
    }
  }
`

class ModStudent extends Component {
  render() {
    return (
      <div className="flex mt2 items-start">
      <div className="flex items-center">

        <span className="gray">{this.props.student.list_number}.</span>
      
      </div>
      <div className="ml1">
        <div>
          {this.props.student.student_rut} | {' '}
          {this.props.student.present
            ? 'Presente'
            : 'Ausente'}{' '}
          
        </div>
        
          <Mutation
           mutation={UPDATE_RUT_MUTATION}
            variables={{ studentId: this.props.student.id }}
            update={(store) =>
                this.props.updateList(store)
            }
            >
            {postMutation => <button onClick={postMutation}>Modificar</button>}
          </Mutation>

          <Mutation
           mutation={DELETE_MUTATION}
            variables={{ student_rut: this.props.student.student_rut }}
            update={(store, { data: { post } }) => 
                this.props.updateList(store, post, this.props.index)
            }
            >
            {deleteMutation => <button onClick={deleteMutation}>Eliminar</button>}
            
          </Mutation>
      </div>
    </div>
    )
  }
}
export default ModStudent