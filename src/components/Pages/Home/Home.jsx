import BestServices from "./BestServices";
import CarBrand from "./CarBrand";
import HomeBanner from "./HomeBanner";
import HowWork from "./HowWork";


const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <CarBrand></CarBrand>
            <HowWork></HowWork>
            <BestServices></BestServices>
            
        </div>
    );
};

export default Home;