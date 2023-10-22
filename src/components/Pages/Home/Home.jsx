import App from "./App";
import BestServices from "./BestServices";
import Brands from "./Brands";
import CarBrand from "./CarBrand";
import HomeBanner from "./HomeBanner";
import HomeSearch from "./HomeSearch";
import HowWork from "./HowWork";
import KnowYourWorth from "./KnowYourWorth";


const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <HomeSearch/>
            <CarBrand></CarBrand>
            <Brands></Brands>
            <HowWork></HowWork>
            <BestServices></BestServices>
            <KnowYourWorth></KnowYourWorth>
            <App></App>
            
        </div>
    );
};

export default Home;