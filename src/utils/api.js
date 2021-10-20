import axios from 'axios'

const gamesApi = axios.create({
  baseURL: 'https://nc-games-lookup.herokuapp.com/api/',
})

export const getReviews = async () => {
  const { data } = await gamesApi.get('/reviews')
  return data.reviews
}

export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories')
  //console.log(data, '<><><>data')
  return data.categories
}

export const getReviewsBySearchterm = async (categories) => {
  const { data } = await gamesApi.get(`/reviews?category=${categories}`)
  // console.log(data.reviews, '>>>>> word')
  return data.reviews
}
export const getSingleReview = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}`)
  console.log(data.review)
  return data.review
}
