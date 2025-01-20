import axios from "axios";
import AdvertisementCard from "./shared/AdvertisementCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "./shared/Loading";



const Advertisement = () => {
        const {data:featuredProperties,isLoading}=useQuery({
        queryKey:['featuredProperties'],
        queryFn: async () => {
            const {data}=await axios.get(`http://localhost:9000/properties?isAdvertised=true`)
            return data
      }
      
    }
    )
    if(isLoading){
      return <Loading/>
    }


    return (
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties && featuredProperties.map(property=> <AdvertisementCard key={property._id} property={property} ></AdvertisementCard>  )}
          </div>
        </div>
      </section>
    );
};

export default Advertisement;