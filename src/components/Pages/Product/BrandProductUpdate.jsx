import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const BrandProductUpdate = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const brand = form.brand.value;
    const image = form.image.value;
    const model = form.model.value;
    const type = form.type.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const description = form.description.value;

    // console.log(brand, image, model, type, price, ratings, description);
    const updateCar = {
      brand,
      image,
      model,
      type,
      price,
      ratings,
      description,
    };

    fetch(`http://localhost:5000/cars/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success('Product added successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                form.reset()
        }
      });
  };
  return (
    <div>
      <h2 className="text-center mt-36">Update Products</h2>

      <div className="max-w-[1200px] mx-auto my-20">
        <form onSubmit={handleUpdateProduct}>
          <div className="space-y-10">
            {/* First Row */}
            <div className="md:flex">
              <div className="form-control w-1/2 mr-4">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Write Brand Name
                  </span>
                </label>
                <label className="input-group">
                  <span className="w-1/3 bg-[#2b1b9a] text-white font-bold">
                    Brand Name
                  </span>
                  <input
                    type="text"
                    name="brand"
                    defaultValue={loadedData?.brand}
                    placeholder="Brand"
                    className="input input-bordered w-full focus:outline-none focus:border-[#2b1b9a]"
                  />
                </label>
              </div>
              <div className="form-control w-1/2 mr-4">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Add Brand Cover Photo
                  </span>
                </label>
                <label className="input-group">
                  <span className="w-1/3 bg-[#2b1b9a] text-white font-bold">
                    Image URL
                  </span>
                  <input
                    type="text"
                    name="image"
                    defaultValue={loadedData?.image}
                    placeholder="Image Link"
                    className="input input-bordered w-full focus:outline-none focus:border-[#2b1b9a]"
                  />
                </label>
              </div>
            </div>
            {/* Second Row */}
            <div className="md:flex">
              <div className="form-control w-1/2 mr-4">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Write Product Model
                  </span>
                </label>
                <label className="input-group">
                  <span className="w-1/3 bg-[#2b1b9a] text-white font-bold">
                    Model
                  </span>
                  <input
                    type="text"
                    name="model"
                    defaultValue={loadedData?.model}
                    placeholder="Model"
                    className="input input-bordered w-full focus:outline-none focus:border-[#2b1b9a]"
                  />
                </label>
              </div>
              <div className="form-control w-1/2 mr-4">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Add Product Type
                  </span>
                </label>
                <label className="input-group">
                  <span className="w-1/3 bg-[#2b1b9a] text-white font-bold">
                    Type
                  </span>
                  <input
                    type="text"
                    name="type"
                    defaultValue={loadedData?.type}
                    placeholder="Product Type"
                    className="input input-bordered w-full focus:outline-none focus:border-[#2b1b9a]"
                  />
                </label>
              </div>
            </div>
            {/* Third Row */}
            <div className="md:flex">
              <div className="form-control w-1/2 mr-4">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Write Price of Product
                  </span>
                </label>
                <label className="input-group">
                  <span className="w-1/3 bg-[#2b1b9a] text-white font-bold">
                    Price
                  </span>
                  <input
                    type="text"
                    name="price"
                    defaultValue={loadedData?.price}
                    placeholder="Price"
                    className="input input-bordered w-full focus:outline-none focus:border-[#2b1b9a]"
                  />
                </label>
              </div>
              <div className="form-control w-1/2 mr-4">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Add Your Ratings
                  </span>
                </label>
                <label className="input-group">
                  <span className="w-1/3 bg-[#2b1b9a] text-white font-bold">
                    Ratings
                  </span>
                  <input
                    type="number"
                    name="ratings"
                    defaultValue={loadedData?.ratings}
                    placeholder="Ratings"
                    className="input input-bordered w-full focus:outline-none focus:border-[#2b1b9a]"
                  />
                </label>
              </div>
            </div>
            {/* Fourth Row */}
            <div className="md:flex">
              <div className="form-control w-full mr-4">
                <label className="label">
                  <span className="label-text w-1/4 py-4 px-5 font-semibold rounded-l-lg bg-[#2b1b9a] text-white">
                    Add Product Description
                  </span>
                </label>
                <label className="input-group">
                  <textarea
                    id="product-description"
                    name="description"
                    rows="8"
                    cols="50"
                    className="input input-bordered w-full focus:outline-none focus:border-[#2b1b9a]"
                  >
                    At w3schools.com you will learn how to make a website. They
                    offer free tutorials in all web development technologies.
                  </textarea>
                </label>
              </div>
            </div>
          </div>
          {/* Button */}

          <input
            type="submit"
            value="Update Product"
            className="btn btn-block bg-[#2b1b9a] text-white hover:text-[#2b1b9a] mt-20 font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default BrandProductUpdate;
