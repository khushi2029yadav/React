import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const{id} = useParams();
    const navigate = useNavigate();
     const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];
  const product = products.find((a)=>{
    a.id === Number(id);
  })
  if(!product){
    return<h1>Product not found</h1>
  }

  return (
  <>
  <h1>{product.name}</h1>
  <h3>{product.price}</h3>

      <button onClick={() => navigate("/list")}>
        Back to List
      </button>
  </>
  )
}

export default ProductDetails