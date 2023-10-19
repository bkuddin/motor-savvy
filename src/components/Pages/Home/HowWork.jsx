import build from '../../../assets/images/buid-and-price.png';
import find from '../../../assets/images/find-dealers.png';
import search from '../../../assets/images/searchinventory.png';

const HowWork = () => {
    return (
        <div className='mt-32' >

            <div className="text-center space-y-4">
                <p className="text-xl">How It Work</p>
                <h2 className="text-3xl font-bold">BRING IT HOME IN FOUR EASY STEPS</h2>
                <p className="text-xl">From inventory to financing, the Dodge E-Shop Program brings <br /> the complete dealership experience to your doorstep.</p>
            </div>

            <div className='flex justify-center my-32 space-x-52'>
                <div className='w-[100px] h-[100px] rounded-lg border-4 border-white shadow-lg bg-[#F2F2F2] p-7 flex items-center'><img src={search} alt="" /></div>
                <div className='w-[100px] h-[100px] -mt-10 rounded-lg border-4 border-white shadow-lg bg-gradient-to-b from-red-700 to-orange-500 p-7 flex items-center'><img src={build} alt="" /></div>
                <div className='w-[100px] h-[100px] rounded-lg border-4 border-white shadow-lg bg-[#F2F2F2] p-7 flex items-center'><img src={find } alt="" /></div>
                
            </div>
            
        </div>
    );
};

export default HowWork;