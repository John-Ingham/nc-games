import React, { useEffect } from 'react'
import { getComments, getSingleReview, patchVote } from '../utils/api'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleReview = () => {
  const [review, setReview] = useState([])
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [loading2, setLoading2] = useState(true)
  const [votes, setVotes] = useState(0)
  const { review_id } = useParams()
  const [disabled, setDisabled] = useState(false)

  const handleVoteButtonClick = (event) => {
    event.preventDefault()
    setVotes((currVotes) => {
      return currVotes + 1
    })
    patchVote(review_id)
    setDisabled(true)
  }

  useEffect(() => {
    setLoading(true)
    getSingleReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi)
      setLoading(false)
    })
  }, [review_id])

  useEffect(() => {
    setLoading2(true)
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi)
      setLoading2(false)
    })
  }, [review_id])

  return (
    <div>
      {loading ? (
        <img
          className="loading"
          src="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1"
          alt="loading"
        />
      ) : (
        <section id="singleReview">
          <h3>Review ~ {review.review_id}</h3>
          <h4> Title ~ {review.title} </h4>
          <img
            src={review.review_image_url}
            alt={review.title}
            height="300"
            width="300"
          />
          <p> Review ~ {review.review_body}</p>
          <p>
            Game Category ~ {review.category} ~ Game Designer ~{' '}
            {review.designer}{' '}
          </p>
          <p> Review Author/Owner ~ {review.owner}</p>
          <p></p>
          <p>Comments ~ {review.comment_count}</p>
          <button
            className="button"
            onClick={handleVoteButtonClick}
            disabled={disabled}
          >
            Vote for this review 👍 Votes ~ {votes + review.votes}
          </button>
        </section>
      )}
      {loading2 ? (
        <img
          className="loading"
          src="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1"
          alt="loading"
        />
      ) : (
        <section id="commentsOnReview">
          <h4 id="comments">Review Comments</h4>
          <ul id="commentslist">
            {comments.map((comment) => {
              return (
                <li className="commentsListItem" key={comment.comment_id}>
                  <h4>
                    Comment {comment.comment_id} ~ Author {comment.author}
                  </h4>
                  <p>Comment - {comment.body}</p>
                  <p>Vote Count: {comment.votes}</p>
                </li>
              )
            })}
          </ul>
          {comments.length === 0 ? <p>No comments made as yet</p> : null}
          <Link to={`/:${review_id}/postcomment`}>
            <button className="button">Click here to post a comment</button>
          </Link>
        </section>
      )}
    </div>
  )
}

export default SingleReview
