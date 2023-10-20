import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Rating from "./Rating";

const BrandProducts = () => {
  const [productBrand, setProductBrand] = useState([]);
  const brandProducts = useLoaderData();
  const { brand_name } = useParams();
  console.log(brand_name);

  useEffect(() => {
    const filtaringBrand = brandProducts.filter(
      (brand) => brand.brand.toLowerCase() === brand_name.toLowerCase()
    );
    setProductBrand(filtaringBrand);
  }, [brand_name, brandProducts]);
  return (
    <div>
      {/* Carousel */}
      <div className="carousel w-full h-[56vh] mt-20">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/5h21g4W/banner-4-bk-uddin.png" className="w-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/dcRVZ2x/banner-5-bk-uddin.png" className="w-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/vVrWc3S/banner-6-bk-uddin.jpg" className="w-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>

      {/* Show Products */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {productBrand.map((product) => (
          <div key={product._id}>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img src={product.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{product.brand}</h2>
                <h4><span className="font-semibold">Model:</span> {product.model}</h4>
                <div className="flex justify-between">
                  <p><span className="font-semibold">Price: $</span>{product.price}</p>
                  <Rating rating={product.rating}></Rating>
                  
                </div>
               
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/product-details/${product._id}`} ><button className="btn btn-primary">Details</button></Link>
                  <Link to={`/product-update/${product._id}`}><button className="btn btn-primary">Update</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
