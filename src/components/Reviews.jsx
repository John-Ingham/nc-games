import React from 'react'
import { getReviews } from '../utils/api'
import { useEffect, useState } from 'react'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi)
      setLoading(false)
    })
  }, [])
  //console.log(reviews, '<><><>reviews')
  return (
    <div>
      <p>REVIEWS</p>
      <ul id="reviewsList">
        {reviews.map((review) => {
          return (
            <li className="reviewItems" key={review.review_id}>
              <h4>
                {review.review_id} ~ {review.title}
              </h4>
              <p className="reviewtext"> Category - - {review.category} </p>
              <p className="reviewtext"> Votes - - {review.votes}</p>
              <img
                className="reviewImages"
                src={review.review_image_url}
                alt={review.title}
                width="300"
                height="300"
              ></img>
              <button className="button">Go to this review</button>
            </li>
          )
        })}
      </ul>
      {/* if(loading){<p> ..... Loading</p>} Need to fix this */}
    </div>
  )
}

export default Reviews
