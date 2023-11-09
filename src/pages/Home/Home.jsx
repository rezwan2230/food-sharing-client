import { Helmet } from "react-helmet";
import Bannner from "./Bannner";
import FeaturedSection from "./FeaturedSection/FeaturedSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Food Share | Home</title>
            </Helmet>
            <Bannner></Bannner>
            <FeaturedSection></FeaturedSection>

        </div>
    );
};

export default Home;