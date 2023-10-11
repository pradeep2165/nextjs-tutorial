import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Link href="/blog">
        Blog
      </Link>
      <Link href="/product">Product</Link>
    </div>
  )
}

export default Home
