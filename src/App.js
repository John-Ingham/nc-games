import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Categories from './components/Categories'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Nav from './components/Nav'
import Reviews from './components/Reviews'
import SingleReview from './components/SingleReview'

import './css/App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <div className="App">
          <header className="App-header">APP</header>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App
