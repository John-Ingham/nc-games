import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getReviewsBySearchterm } from '../utils/api'
import { useState } from 'react'

const ReviewsBySearchterm = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  const { categories } = useParams()

  useEffect(() => {
    setLoading(true)
    getReviewsBySearchterm(categories).then((reviewsFromApi) => {
      setReviews(reviewsFromApi)
      setLoading(false)
    })
  }, [categories])

  return (
    <div>
      {loading ? (
        <img
          className="loading"
          src="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1"
          alt="loading"
        />
      ) : (
        <section>
          <h4 id="sortedreviews">Reviews sorted by {categories}</h4>
          <ul id="sortedreviewslist">
            {reviews.map((review) => {
              return (
                <li className="sortedReviews" key={review.review_id}>
                  <h4>
                    {review.review_id} ~ {review.title}
                  </h4>
                  <Link to={`/reviews/${review.review_id}`}>
                    <button className="button">Go to this review</button>
                  </Link>
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
        </section>
      )}
    </div>
  )
}

export default ReviewsBySearchterm
