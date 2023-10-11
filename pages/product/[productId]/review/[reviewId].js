import React from 'react'
import { useRouter } from 'next/router'
const Review = () => {
    const router = useRouter()
    const {reviewId, productId} = router.query
  return (
    <div>
      <h1>review {reviewId} for product {productId}</h1>
    </div>
  )
}

export default Review
