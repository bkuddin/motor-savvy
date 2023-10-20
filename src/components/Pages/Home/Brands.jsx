import { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="my-52">
        <h2 className="text-3xl font-bold text-center mb-20">Choose Your Brand</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-between items-center px-20">
          {brands.map((brand) => (
            <div key={brand.id}>
              <div className="card w-full bg-base-100 hover:shadow-2xl border-2 border-gray-100 hover:border-2 hover:border-[#ea580c]">
                <div className="card-body bg-gray-100 rounded-t-2xl">
                  <h2 className="card-title">{brand.brand_name}</h2>
          
                </div>
                <figure>
                  <img
                    src={brand.brand_img}
                    alt={brand.brand_name}
                  />
                </figure>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Brands;
