import React from 'react'
import { useEffect, useState } from 'react'

const PostComment = () => {
  const [loading, setLoading] = useState(true)
  return (
    <div>
      {loading ? (
        <img
          src="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1"
          alt="loading"
        />
      ) : (
        <section></section>
      )}
    </div>
  )
}

export default PostComment
