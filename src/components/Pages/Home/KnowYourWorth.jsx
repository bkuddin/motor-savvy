import { IoMdCheckmark } from "react-icons/io";
import carTop from "../../../assets/images/car-top.png";
import cooling from "../../../assets/images/cool.jpg";
import elec from "../../../assets/images/ele.png";
import engine from "../../../assets/images/engine.jpg";
import plusMore from "../../../assets/images/more.jpg";
import search from "../../../assets/images/searchinventory.png";
import trans from "../../../assets/images/trans.jpg";

const KnowYourWorth = () => {
  return (
    <div className="my-40">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Know Your Worth</h2>
        <p className="text-xl w-1/2 mx-auto">
          The Motor Savvy isn’t just the winner of Kelley Blue Book’s fourth
          consecutive Best Car Styling Brand award in 2023—we trust Kelley Blue
          Book to offer drivers the honest market value of their vehicle. Find
          out how much your vehicle is worth with an independent estimate.{" "}
        </p>
      </div>

      <div style={{display: 'flex', justifyContent: 'center'}} className="grid grid-cols-1 md:grid-cols-12 items-center my-24">
        <div className="col-span-3">
          <div className="w-[100px] h-[100px] mb-4 rounded-lg border-4 border-white shadow-lg bg-[#F2F2F2] p-7 flex items-center ">
            <img src={search} alt="" />
          </div>
          <div className="w-[100px] h-[100px] mb-4 rounded-lg border-4 border-white shadow-lg bg-[#F2F2F2] p-7 flex items-center ">
            <img src={search} alt="" />
          </div>
          <div className="w-[100px] h-[100px] mb-4 rounded-lg border-4 border-white shadow-lg bg-[#F2F2F2] p-7 flex items-center ">
            <img src={search} alt="" />
          </div>
          
        </div>
        <div className="col-span-6">
          <img className="" src={carTop} alt="" />
        </div>
        <div className="col-span-3">
          <div className="w-[100px] h-[100px] mb-4 rounded-lg border-4 border-white shadow-lg bg-[#F2F2F2] p-7 flex items-center ">
            <img src={search} alt="" />
          </div>
          <div className="w-[100px] h-[100px] mb-4 rounded-lg border-4 border-white shadow-lg bg-[#F2F2F2] p-7 flex items-center ">
            <img src={search} alt="" />
          </div>
          <div className="w-[100px] h-[100px] mb-4 rounded-lg border-4 border-white shadow-lg bg-[#F2F2F2] p-7 flex items-center ">
            <img src={search} alt="" />
          </div>
          
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 px-20 my-32">
        {/* 1 */}
        <div className="bg-[#F2F2F2] py-2 px-2 rounded-lg ">
           <div className="flex justify-start space-x-4 ">
              <img className="w-[70px] h-[70px] px-2 p-2 rounded-lg bg-white object-contain shadow-lg" src={engine} alt="" />
              <p className="flex items-center text-xl font-medium">Engine <IoMdCheckmark className="ml-1 text-[#ea580c]"/></p> 
           </div>
        </div>
        {/* 2 */}
        <div className="bg-[#F2F2F2] py-2 px-2 rounded-lg ">
           <div className="flex justify-start space-x-4 ">
              <img className="w-[70px] h-[70px] px-2 p-2 rounded-lg bg-white object-contain shadow-lg" src={trans} alt="" />
              <p className="flex items-center text-xl font-medium">Transmission  <IoMdCheckmark className="ml-1 text-[#ea580c]"/></p> 
           </div>
        </div>
        {/* 3 */}
        <div className="bg-[#F2F2F2] py-2 px-2 rounded-lg ">
           <div className="flex justify-start space-x-4 ">
              <img className="w-[70px] h-[70px] px-2 p-2 rounded-lg bg-white object-contain shadow-lg" src={elec} alt="" />
              <p className="flex items-center text-xl font-medium">Electrical <IoMdCheckmark className="ml-1 text-[#ea580c]"/></p> 
           </div>
        </div>
        {/* 4 */}
        <div className="bg-[#F2F2F2] py-2 px-2 rounded-lg ">
           <div className="flex justify-start space-x-4 ">
              <img className="w-[70px] h-[70px] px-2 p-2 rounded-lg bg-white object-contain shadow-lg" src={cooling} alt="" />
              <p className="flex items-center text-xl font-medium">Cooling <IoMdCheckmark className="ml-1 text-[#ea580c]"/></p> 
           </div>
        </div>
        {/* 5 */}
        <div className="bg-[#F2F2F2] py-2 px-2 rounded-lg ">
           <div className="flex justify-start space-x-4 ">
              <img className="w-[70px] h-[70px] px-2 p-2 rounded-lg bg-white object-contain shadow-lg" src={plusMore} alt="" />
              <p className="flex items-center text-xl font-medium">20+ More <IoMdCheckmark className="ml-1 text-[#ea580c]"/></p> 
           </div>
        </div>
       
      </div>
    </div>
  );
};

export default KnowYourWorth;
