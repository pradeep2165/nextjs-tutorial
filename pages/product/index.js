import Link from "next/link";
import React from "react";

const index = ({productId=100}) => {
  return (
    <div>
      <Link href="/">
      Home
      </Link>
      <h1><Link href="/product/1">product 1</Link></h1>
      <h1><Link href="/product/2">product 2</Link></h1>
      <h1><Link href="/product/3" replace>product 3</Link></h1>
      <h1><Link href={`/product/${productId}`}>product {productId}</Link></h1>
    </div>
  );
};

export default index;
