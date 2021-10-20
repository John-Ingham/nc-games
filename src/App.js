import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Categories from './components/Categories'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Nav from './components/Nav'
import Reviews from './components/Reviews'
import SingleReview from './components/SingleReview'
import ReviewsBySearchterm from './components/ReviewsBySearchterm'
import { useEffect, useState } from 'react'
import './css/App.css'

function App() {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    const prevLoggedInUser = localStorage.getItem('loggedInUser')

    if (prevLoggedInUser) {
      setCurrentUser(prevLoggedInUser)
    }
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Homepage currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/reviews/:review_id">
          <SingleReview />
        </Route>
        <Route exact path="/:categories/reviews">
          <ReviewsBySearchterm />
        </Route>

        <Route>
          <h2> 404 - Page not found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
