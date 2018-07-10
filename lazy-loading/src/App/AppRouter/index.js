import React from 'react'
import { HomePage, ProfilePage } from '../AppLazyLoader'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default function AppRouter (props) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div>
          <Link to='/profile'>Profile</Link>
        </div>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <Route exact path='/' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
      </React.Fragment>
    </BrowserRouter>
  )
}
