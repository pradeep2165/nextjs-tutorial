import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Home = () => {
  const router = useRouter()
  const handleClick=()=>{
    console.log('placing your order');
    router.push("/product");
  } 
  return (
    <div>
      <h1>Hello</h1>
      <Link href="/blog">
        Blog
      </Link>
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>place order</button>
    </div>
  )
}

export default Home
