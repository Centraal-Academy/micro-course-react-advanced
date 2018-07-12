import React from 'react'
import { Route, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
export default class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/profile'>Profile</Link>
        </div>
        <Route exact path='/' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
      </div>
    )
  }
}
