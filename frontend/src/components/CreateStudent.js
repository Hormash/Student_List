import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { FEED_QUERY } from './ModStudentList'

const POST_MUTATION = gql`
    mutation PostMutation($student_rut: String!, $list_number: Int!){
        createStudent(student_rut: $student_rut, list_number: $list_number) {
        id
        student_rut
        list_number
        present
        }
  }
`


class CreateStudent extends Component {
  state = {
    student_rut: '',
    list_number: 1,
  }

  render() {
    const { student_rut, list_number } = this.state
    return (
      <div>
        <div className="ml1">
          <div>
            Ingrese rut y numero de lista
          </div>
        </div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={student_rut}
            onChange={e => this.setState({ student_rut: e.target.value })}
            type="text"
            placeholder="Rut del estudiante"
          />
          <input
            className="mb2"
            value={list_number}
            onChange={e => this.setState({ list_number: parseInt(e.target.value) })}
            type="text"
            placeholder=""
          />
        </div>
        
        <Mutation mutation={POST_MUTATION}
         variables={{ student_rut, list_number }}
         onCompleted={() => this.props.history.push('/modificar')}
         update={(store, { data: { post } }) => {
            const  {allStudents_sort}  = store.readQuery({ query: FEED_QUERY })
            
            store.writeQuery({
                query: FEED_QUERY,
                data: {allStudents_sort: allStudents_sort.concat({post})}
              })
            }}
         >
            {postMutation => <button onClick={postMutation}>Guardar</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateStudent