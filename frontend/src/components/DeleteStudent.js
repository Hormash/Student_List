import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { FEED_QUERY } from './ModStudentList'

const DELETE_MUTATION = gql`
    mutation PostMutation($student_rut: String!){
        delete(student_rut: $student_rut) {
          id
          student_rut
          list_number
        }
      }
`


class DeleteStudent extends Component {
  state = {
    student_rut: '',
  }

  render() {
    const { student_rut } = this.state
    return (
      <div>
        <div className="ml1">
          <div>
            Ingrese rut a eliminar
          </div>
        </div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={student_rut}
            onChange={e => this.setState({ student_rut: e.target.value })}
            type="text"
            placeholder="Estudiante a eliminar"
          />
        </div>
       
        <Mutation mutation={DELETE_MUTATION}
         variables={{ student_rut }}
         onCompleted={() => this.props.history.push('/modificar')}
         update={(store, { data: { post } }) => {
          const  {allStudents_sort}  = store.readQuery({ query: FEED_QUERY })
          
          store.writeQuery({
              query: FEED_QUERY,
              data: {allStudents_sort: allStudents_sort.concat({post})}
            })
          }}
           >
            {postMutation => <button onClick={postMutation}>Eliminar</button>}
        </Mutation>
      </div>
    )
  }
}

export default DeleteStudent