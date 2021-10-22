import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { postComment } from '../utils/api'

const PostComment = ({ currentUser }) => {
  const { review_id } = useParams()
  const [loginErrorMsg, setLoginErrorMsg] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [text, setText] = useState('')
  const [submitConfirmation, setSubmitConfirmation] = useState(false)

  const usersArray = [
    'jessjelly',
    'tickle122',
    'happyamy2016',
    'grumpy19',
    'cooljmessy',
    'weegembump',
  ]
  const checkLogin = (event) => {
    if (!usersArray.includes(currentUser)) {
      setLoginErrorMsg(true)
      setDisabled(true)
    } else {
      setLoginErrorMsg(false)
      setDisabled(false)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    postComment(review_id, currentUser, text)
    setSubmitConfirmation(true)
  }

  return (
    <div>
      <section>
        {currentUser ? (
          <p className="loggedInReveal">Logged in as {currentUser}</p>
        ) : (
          <p className="loggedInReveal">You are currently not logged in</p>
        )}
        {loginErrorMsg ? (
          <p className="loginErrorMsg">
            Only valid, signed-in, users may post a comment
          </p>
        ) : null}
        <section id="commentsSection">
          <h3> Please submit your comments about Review {review_id}</h3>

          <form id="commenttypeform">
            <label id="commentformlabel">Please enter your comments here</label>
            <textarea
              id="commentinput"
              type="text"
              disabled={disabled}
              onClick={checkLogin}
              onChange={(e) => {
                setText(e.target.value)
              }}
            />
            <button type="submit" className="button" onClick={handleSubmit}>
              {' '}
              Submit
            </button>
            {submitConfirmation ? (
              <p className="submitConfirmation">
                Thanks for your comment {currentUser}
              </p>
            ) : null}
          </form>
        </section>
      </section>
    </div>
  )
}

export default PostComment
