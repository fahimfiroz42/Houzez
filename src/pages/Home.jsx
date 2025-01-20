
import Advertisement from '../components/Advertisement';
import Banner from '../components/Banner';
import LatestReview from '../components/LatestReview';
import MeetOurAgents from '../components/MeetOurAgents';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertisement/>
            <LatestReview/>
            <MeetOurAgents/>
            <WhyChooseUs/>
        </div>
    );
};

export default Home;