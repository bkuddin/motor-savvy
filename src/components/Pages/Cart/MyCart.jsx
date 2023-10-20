import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loadedData = useLoaderData();

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if(data.deletedCount > 0){
        //     alert('Data deleted successfully')
        // }
      });
  };

  return (
    <div className="px-20">
      <div className="overflow-x-auto mt-48">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl font-semibold">
              <th>No.</th>
              <th></th>
              <th>Name</th>
              <th>Model</th>
              <th>Ratings</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
             {
                loadedData.map((data, idx) =>  <tr key={data._id}>
                   <th>{idx + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-44 h-20">
                          <img
                            src={data.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{data.brand}</td>
                    <td>{data.model}</td>
                    <td>{data.ratings}</td>
                    <td>{data.price}</td>
                    <th>
                      <button onClick={()=> handleDelete(data._id)} className="px-8 py-3 rounded-lg bg-[#ea580c] text-white">Delete</button>
                    </th>
                  </tr>)
             }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
