import React from 'react'
import HomePage from '../../pages/HomePage'
import ProfilePage from '../../pages/ProfilePage'
import Button from '../../components/Button'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default function AppRouter (props) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Button>
          <Link to='/profile'>Profile</Link>
        </Button>
        <Button>
          <Link to='/'>Home</Link>
        </Button>
        <Route exact path='/' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
      </React.Fragment>
    </BrowserRouter>
  )
}
