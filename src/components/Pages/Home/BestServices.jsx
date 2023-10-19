import { Link } from 'react-router-dom';
import homeCar from '../../../assets/images/home-car.png';

const BestServices = () => {
    return (
        <div className='my-32 '>

            <div className='md:flex justify-around'>
                <div className='md:-ml-[30rem]'>
                    <img src={homeCar} alt="" />
                </div>
                <div className='space-y-4 md:mr-20 mx-4'>
                     <p className='text-xl'>Best Services</p>
                    <h2 className='text-3xl font-bold'>CURRENT OFFERS</h2>
                    <p className="text-xl">We’re offering special deals to make sure <br /> you can get into the Dodge Brand vehicle that fits you. <br /> Check out what’s available now.</p>
                    <Link><button className='px-10 py-3 rounded-lg text-white bg-[#2b1b9a] mt-6'>Explore Current Offers </button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default BestServices;