
import Advertisement from '../components/Advertisement';
import Banner from '../components/Banner';
import LatestReview from '../components/LatestReview';
import MeetOurAgents from '../components/MeetOurAgents';
import ParallaxSection from '../components/ParallaxSection';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertisement/>
            <ParallaxSection/>
            <LatestReview/>
            <MeetOurAgents/>
            <WhyChooseUs/>
        </div>
    );
};

export default Home;