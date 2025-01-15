
import Advertisement from '../components/Advertisement';
import Banner from '../components/Banner';
import LatestReview from '../components/LatestReview';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertisement/>
            <LatestReview/>
            <WhyChooseUs/>
        </div>
    );
};

export default Home;