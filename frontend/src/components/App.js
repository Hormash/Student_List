import React, { Component } from 'react'
import StudentList from './StudentList'
import CreateStudent from './CreateStudent'
import DeleteStudent from './DeleteStudent'
import ModStudentList from './ModStudentList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
      return (<div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={StudentList} />
          <Route exact path="/crear" component={CreateStudent} />
          <Route exact path="/eliminar" component={DeleteStudent} />
          <Route exact path="/modificar" component={ModStudentList} />
        </Switch>
      </div>
    </div>
  )

  }
}

export default App
