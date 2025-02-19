
import Advertisement from '../components/Advertisement';
import Banner from '../components/Banner';
import GridSection from '../components/Gallery';
import LatestReview from '../components/LatestReview';
import MeetOurAgents from '../components/MeetOurAgents';
import ParallaxSection from '../components/ParallaxSection';
import Subscribe from '../components/Subscribe';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertisement/>
            <ParallaxSection/>
            <LatestReview/>
            <GridSection/>
            <MeetOurAgents/>
            <WhyChooseUs/>
            <Subscribe/>
        </div>
    );
};

export default Home;