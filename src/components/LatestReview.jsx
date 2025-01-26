import axios from "axios";
import Latestreviewcard from "./shared/Latestreviewcard";
import { useQuery } from "@tanstack/react-query";


const LatestReview = () => {

  

      const {data:latestReviews,isLoading}=useQuery({
        queryKey:['latestReviews'],
        queryFn: async () => {
            const {data}=await axios.get(`https://houzez-server.vercel.app/reviews`)
            return data
      }
      
    }
    )



    return (
        <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestReviews && latestReviews.map((review) =><Latestreviewcard   review={review} key={review._id}    /> )}
          </div>
        </div>
      </section>
    );
};

export default LatestReview;