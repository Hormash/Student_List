import React, { Component } from 'react'
import Student from './Student'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const STUDENT_QUERY = gql`
    {
        allStudents_sort {
          id
          student_rut
          list_number
          present
        }
      }
    `
class StudentList extends Component {
    render() {
        return (
          <Query query={STUDENT_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <div>Cargando...</div>
              if (error) return <div>Error</div>
        
              const studentsToRender = data.allStudents_sort
        
              return (
                <div>
                  {studentsToRender.map( student => <Student key={student.id}  student={student}/>)}
                </div>
              )
            }}
          </Query>
        )
      }
}

export default StudentList