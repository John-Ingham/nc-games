import React from 'react'
import { getCategories } from '../utils/api'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi)
      setLoading(false)
    })
  }, [])
  console.log(categories, '>>>>>>Categories')

  return (
    <div className="categoriesSection">
      <h2 id="categories">Categories List</h2>
      <p>
        {' '}
        This is the current list of all the game categories/genres that we have
        reviewed on the group so far.{' '}
      </p>
      <ul id="categoriesList">
        {categories.map((category) => {
          return (
            <li className="categoryItem" key={category.slug}>
              <h3>{category.slug}</h3>
              <h4> {category.description}</h4>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
