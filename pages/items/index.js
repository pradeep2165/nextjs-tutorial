export default function ProductList({ items }) {
  return (
    <>
      <h1>List of Products</h1>
      {items.map(product=>{
        return (
          <div key={product.id}>
            <h2>{product.id} {product.title} {product.price}</h2>
            <p>{product.description}</p>
            <hr/>
            
          </div>
        )
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/items");
  const data = await response.json()
  return {
    props:{
      items:data
    }
  }
}