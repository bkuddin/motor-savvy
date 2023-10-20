import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [products, setProducts] = useState('');
  const loadedProducts = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const findProduct = loadedProducts.find((item) => item._id === id);
    setProducts(findProduct);
    
  }, [id, loadedProducts]);

  const handleAddToCart = () =>{
    fetch('http://localhost:5000/users',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(products)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            toast.success('Product Add to Cart successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                
        }
        
    })
  }
 
  return (
    <div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={products.image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{products.brand}</h1>
      <p className="py-6">{products.description}</p>
      <button onClick={handleAddToCart} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
     
      
       
     
    </div>
  );
};

export default ProductDetails;
