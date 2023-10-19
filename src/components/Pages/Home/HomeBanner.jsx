
import HomePhotoBG from '../../../assets/images/Home-Banner-BG.png';
import HomePhoto from '../../../assets/images/Home-Banner-Photo.png';
import appleStore from '../../../assets/images/apple-store.png';
import googlePlay from '../../../assets/images/google-play.png';
import HomeSearch from './HomeSearch';

const HomeBanner = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]  px-20 overflow-x-hidden">
        <div className="absolute top-0 right-0 left-0 bottom-0 z[2] h-[80vh] bg-[#EEEFF1]"></div>
     
     
      {/* Banner Text & Image */}

     
        <div className='md:flex-row justify-between  flex flex-col-reverse  z-[2]'>
            <div className='space-y-3 md:mt-14  '>
              <h1 className='text-4xl font-bold'>Your Guide to Automotive <br /> Excellence.
              </h1>
              <hr className='w-10 border-orange-600 border-2' />
              <p className='pb-6'>
                MotorSavvy.com: Your Roadmap to Automotive Excellence. Explore
                expert advice on maintenance, repairs, and industry trends. Your
                go-to source for mastering all things automotive.
              </p>
              <div className="md:flex md:space-x-4 md:space-y-0 space-y-4  ">
                <button className='bg-white px-10 py-3 shadow-lg rounded-2xl'>
                   <img className='w-[120px]'  src={appleStore} alt="" />
                </button>
                <button className='bg-white px-10 py-3 shadow-lg rounded-2xl'>
                    <img className='w-[120px]' src={googlePlay} alt="" />
                </button>
              </div>
              <HomeSearch/>
            </div>
            <div className='relative'>
                <img className='absolute md:top-20 md:-right-36 top-10' src={HomePhoto} alt="" />
                <img className='md:w-[2500px]' src={HomePhotoBG} alt="" />
            </div>
        </div>
     
    </div>
  );
};

export default HomeBanner;
