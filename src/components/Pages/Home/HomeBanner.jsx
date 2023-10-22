import HomePhotoBG from "../../../assets/images/Home-Banner-BG.png";
import CarPhoto from "../../../assets/images/Home-Banner-Photo.png";
import appleStore from "../../../assets/images/apple-store.png";
import googlePlay from "../../../assets/images/google-play.png";

const HomeBanner = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] px-20 mt-10 overflow-x-hidden">
      <div className="absolute top-0 right-0 left-0 bottom-0 z[2] h-[80vh] bg-[#EEEFF1]"></div>

      {/* Banner Text & Image */}

      <div className="grid grid-cols-1 md:grid-cols-12  z-[2]">
        <div className="col-span-5 mt-20 space-y-4">
          <h1 className="text-5xl font-bold">
            Your Guide to Automotive Excellence.
          </h1>
          <hr className="w-10 border-orange-600 border-2" />
          <p className="pb-6">
            MotorSavvy.com: Your Roadmap to Automotive Excellence. Explore
            expert advice on maintenance, repairs, and industry trends.
          </p>
          <div className="md:flex md:space-x-4 md:space-y-0 space-y-4   ">
            <button className="bg-white px-10 py-3 shadow-lg rounded-2xl">
              <img className="w-[120px]" src={appleStore} alt="" />
            </button>
            <button className="bg-white px-10 py-3 shadow-lg rounded-2xl">
              <img className="w-[120px]" src={googlePlay} alt="" />
            </button>
          </div>
        </div>
        <div className="relative col-span-7 md:order-last order-first ">
          <img
            className="absolute md:-top-5 md:-right-24 top-0"
            src={CarPhoto}
            alt=""
          />
          <img className="h-[87vh]" src={HomePhotoBG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
