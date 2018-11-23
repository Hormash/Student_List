import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'


const PRESENT_MUTATION = gql`
  mutation PresentMutation($id: ID!) {
    is_present(id: $id) {
      id
      student_rut
      list_number
      present
    }
  }
`

class Student extends Component {
  render() {
    return (
      <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{this.props.student.list_number}.</span>

          
      
      </div>
      <div className="ml1">
        <div>
          {this.props.student.student_rut} | ¿Se encuentra Presente?
          
        </div>
      </div>
      <div className="ml1">
        <div>
        <Mutation
           mutation={PRESENT_MUTATION}
            variables={{ id: this.props.student.id }}
            >
            {presentMutation => (
              <div className="ml1 gray f11" onClick={presentMutation}>
                <input type="checkbox" defaultChecked={this.props.student.present} onChange={this.handleChangeChk} />
                
              </div>
            )}
          </Mutation> 
          
        </div>
      </div>
    </div>
    )
  }
}
export default Student