import React from 'react'
import { getReviews } from '../utils/api'
import { useEffect, useState } from 'react'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi)
    })
  }, [])
  console.log(reviews, '<><><>reviews')
  return (
    <div>
      <p>REVIEWS</p>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h4>
                {review.review_id} ~ {review.title}
              </h4>
              <img src={review.review_image_url} width="500" height="500"></img>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Reviews
