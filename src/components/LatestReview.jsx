import Latestreviewcard from "./shared/Latestreviewcard";


const LatestReview = () => {

    const latestReviews = [
        {
          id: 1,
          name: "Emily Brown",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
          review: "Amazing experience! The agent was very professional and helped me find my dream home.",
          propertyTitle: "Luxury Villa with Pool"
        },
        {
          id: 2,
          name: "Michael Clark",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
          review: "Great service and beautiful properties. Highly recommend!",
          propertyTitle: "Modern Downtown Apartment"
        },
        {
          id: 3,
          name: "Sophie Turner",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
          review: "The whole process was smooth and professional. Very satisfied!",
          propertyTitle: "Seaside Beach House"
        }
      ];


    return (
        <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestReviews.map((review) =><Latestreviewcard   review={review} key={review.id}    /> )}
          </div>
        </div>
      </section>
    );
};

export default LatestReview;