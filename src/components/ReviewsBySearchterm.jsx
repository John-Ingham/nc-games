import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getReviewsBySearchterm } from '../utils/api'
import { useState } from 'react'

const ReviewsBySearchterm = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  const { categories } = useParams()
  // console.log(categories)

  useEffect(() => {
    setLoading(true)
    getReviewsBySearchterm(categories).then((reviewsFromApi) => {
      setReviews(reviewsFromApi)
      setLoading(false)
    })
  }, [categories])

  return (
    <div>
      <span>{loading ? 'LOADING' : null} </span>
      <h4 id="sortedreviews">Reviews sorted by {categories}</h4>
      <ul id="sortedreviewslist">
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h4>
                {review.review_id} ~ {review.title}
              </h4>
              <p>Review - {review.review_body}</p>
              <p>Game Designer - {review.designer}</p>
              <p>Reviewer - {review.owner}</p>
              <p>Comments - {review.comment_count}</p>
              <img
                src={review.review_image_url}
                alt={review.title}
                height="350"
                width="350"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ReviewsBySearchterm
