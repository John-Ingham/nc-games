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
  console.log(data, '<><><>data')
  return data.categories
}
