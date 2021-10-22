import axios from 'axios'

const gamesApi = axios.create({
  baseURL: 'https://nc-games-lookup.herokuapp.com/api/',
})

export const getReviews = async (dropdownResult) => {
  if (!dropdownResult || dropdownResult === 'nothing') {
    const { data } = await gamesApi.get('/reviews')
    return data.reviews
  } else {
    const { data } = await gamesApi.get(`/reviews?sort_by=${dropdownResult}`)
    return data.reviews
  }
}

export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories')

  return data.categories
}

export const getReviewsBySearchterm = async (categories) => {
  const { data } = await gamesApi.get(`/reviews?category=${categories}`)

  return data.reviews
}
export const getSingleReview = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}`)

  return data.review
}
export const getComments = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}/comments`)

  return data.comments
}
export const patchVote = async (review_id) => {
  const { data } = await gamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: 1,
  })

  return data
}
export const postComment = async (review_id, currentUser, text) => {
  const review_id2 = review_id.substring(1)

  const { data } = await gamesApi.post(`/reviews/${review_id2}/comments`, {
    username: currentUser,
    body: text,
  })

  return data
}
