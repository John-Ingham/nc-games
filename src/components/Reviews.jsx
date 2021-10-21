import React from 'react'
import { getReviews } from '../utils/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi)
      setLoading(false)
    })
  }, [])
  //console.log(reviews, '<><><>reviews')
  return (
    <div>
      {loading ? (
        <img
          src="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1"
          alt="loading"
        />
      ) : (
        <section>
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
                  <Link to={`/reviews/${review.review_id}`}>
                    <button className="button">Go to this review</button>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </div>
  )
}

export default Reviews
