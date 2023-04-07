function ProductZone({products}) {
  return (
    <div>
       <h1>Product </h1>
     {products.map((product) => (
      <p>{product.title}</p>
     ))}
      
    </div>
  )
}

export default ProductZone
