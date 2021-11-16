import React from 'react'
import { getCategories } from '../utils/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi)
      setLoading(false)
    })
  }, [])

  return (
    <div className="categoriesSection">
      {loading ? (
        <img
          className="loading"
          src="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1"
          alt="loading"
        />
      ) : (
        <section>
          <h2 id="categories">Categories List</h2>
          <p>
            This is the current list of all the game categories/genres that we
            have reviewed on the group so far.
          </p>
          <ul id="categoriesList">
            {categories.map((category) => {
              return (
                <li className="categoryItem" key={category.slug}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpQiG0i5qvYJlrcZF8Sl9wrapLHLOLC4Gsw&usqp=CAU"
                    alt="game being played"
                    height="60"
                    width="100"
                  />
                  <h3>{category.slug}</h3>
                  <h4> {category.description}</h4>
                  <Link to={`/${category.slug}/reviews`}>
                    <button className="button">
                      Go to {category.slug} reviews
                    </button>
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

export default Categories
