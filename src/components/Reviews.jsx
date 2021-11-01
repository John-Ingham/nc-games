import React from 'react'
import { getReviews } from '../utils/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Reviews = ({ dropdownResult }) => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getReviews(dropdownResult).then((reviewsFromApi) => {
      setReviews(reviewsFromApi)
      setLoading(false)
    })
  }, [dropdownResult])
  //console.log(reviews, '<><><>reviews')
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
          <p id="reviewsTitle">REVIEWS</p>
          <ul id="reviewsList">
            {reviews.map((review) => {
              return (
                <div>
                  <li className="reviewItems" key={review.review_id}>
                    <p className="reviewtext">
                      {review.review_id} ~ {review.title}
                    </p>
                    <p className="reviewtext">
                      {' '}
                      Category - - {review.category}{' '}
                    </p>
                    <p className="reviewtext"> Votes - - {review.votes}</p>
                    <img
                      className="reviewImages"
                      src={review.review_image_url}
                      alt={review.title}
                      width="200"
                      height="200"
                    ></img>
                    <Link to={`/reviews/${review.review_id}`}>
                      <button className="button">Go to this review</button>
                    </Link>
                  </li>
                </div>
              )
            })}
          </ul>
        </section>
      )}
    </div>
  )
}

export default Reviews
