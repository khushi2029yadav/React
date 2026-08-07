import React, { useEffect, useState } from 'react'

const Assignment = () => {
    let[input, SetInput] = useState("")
    const [products, SetProducts] = useState([]);
    const[brand, SetBrand] = useState("")
     async function apiCall(){
        if(input.trim()==""){
            alert("Search field cannot be empty");
            return;
        }
        let res =  await fetch (`https://dummyjson.com/products/search?q=${input}`);
        let data = await res.json();
        console.log(data);
        SetProducts(data.products);


    }
useEffect(()=>{
     async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  const data = await res.json();

  SetProducts(data.products);
}
getProducts();
},[]);
function setSorted(type){
    let sorted =[...products]
    if (type === "lowToHigh") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (type === "highToLow") {
    sorted.sort((a, b) => b.price - a.price);
  }
  SetProducts(sorted);

}

  return (
    <div>
        <input onChange={(e)=>SetInput(e.target.value)}/>
        <button onClick={apiCall}>Search</button>
        <button onClick={() => setSorted("lowToHigh")}>
  Price Low to High
</button>

<button onClick={() => setSorted("highToLow")}>
  Price High to Low
</button>
<select onChange={(e)=>SetBrand(e.target.value)}>
      <option value="">All Brands</option>
  <option value="Essence">Essence</option>
  <option value="Velvet Touch">Velvet Touch</option>
  <option value="Chanel">Chanel</option>
</select>
<select>
    <option></option>
</select>
    

        {products.map((a)=>{
             if (brand === "" || a.brand === brand)
            return (
                <div key={a.id}>
                    <img src ={a.thumbnail}/>
                    <h3>Title:{a.brand}</h3>
                    <h3>Price:${a.price}</h3>


                </div>
            )
                
            })
        }

    </div>
  )
}

export default Assignment