import React, { useEffect } from 'react'
import { getSingleReview } from '../utils/api'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleReview = () => {
  const [review, setReview] = useState([])
  const [loading, setLoading] = useState(true)

  const { review_id } = useParams()
  // console.log(review_id, '>>> ID')
  useEffect(() => {
    setLoading(true)
    getSingleReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi)
      setLoading(false)
    })
  }, [review_id])
  return (
    <div>
      <span>{loading ? 'LOADING' : null} </span>
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
        Game Category ~ {review.category} ~ Game Designer ~ {review.designer}{' '}
      </p>
      <p> Review Author/Owner ~ {review.owner}</p>
      <p>Votes ~ {review.votes}</p>
      <p>Comments ~ {review.comment_count}</p>
    </div>
  )
}

export default SingleReview
