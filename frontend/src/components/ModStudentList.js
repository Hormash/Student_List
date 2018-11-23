import React, { Component } from 'react'
import ModStudent from './ModStudent'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


export const FEED_QUERY = gql`
  query{
        allStudents_sort {
          id
          student_rut
          list_number
          present
        }
      }
    `



class ModStudentList extends Component {

  _updateCacheAfterDelete = (store, post, index) => {
    const  data  = store.readQuery({ query: FEED_QUERY })
    data.allStudents_sort.splice(index, 1)
    store.writeQuery({
              query: FEED_QUERY,
              data: data
            })
  }
  
    render() {
        return (
          <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <div>Cargando...</div>
              if (error) return <div>Error</div>
        
              const studentsToRender = data.allStudents_sort
        
              return (
                <div>
                  {studentsToRender.map((student, index) => <ModStudent key={index} student={student} index={index} updateList={this._updateCacheAfterDelete} />)}
                </div>
              )
            }}
          </Query>
        )
      }
}

export default ModStudentList
