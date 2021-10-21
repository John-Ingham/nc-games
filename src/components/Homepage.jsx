import React from 'react'
import { useState } from 'react'

const Homepage = ({ currentUser, setCurrentUser }) => {
  const [errorMsg, setErrorMsg] = useState(false)
  const [user, setUser] = useState('Please login. Guest - try jessjelly')
  return (
    <div>
      <p id="intro">
        A place for board game enthusiasts to get together, share information
        and review some of the games they've played
      </p>
      {currentUser ? (
        <p className="loggedInReveal">Logged in as {currentUser}</p>
      ) : null}
      {errorMsg ? (
        <p className="errorMsg">Please enter a valid username</p>
      ) : null}
      <section id="landing">
        <form
          id="login"
          onSubmit={(e) => {
            e.preventDefault()
            const usersArray = [
              'jessjelly',
              'tickle122',
              'happyamy2016',
              'grumpy19',
              'cooljmessy',
              'weegembump',
            ]
            if (!usersArray.includes(user)) {
              setErrorMsg(true)
            } else {
              setCurrentUser(user)
              localStorage.setItem('loggedInUser', user)
              setErrorMsg(false)
              setUser('')
            }
          }}
        >
          <label id="usernameLabel" htmlFor="username">
            {' '}
            Username:
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setUser(e.target.value)
            }}
            value={user}
          />
          <button className="button" type="submit">
            {' '}
            Go!
          </button>
        </form>
      </section>
    </div>
  )
}

export default Homepage
