import { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Building2, MapPin, DollarSign, Upload, User, Mail, CheckSquare } from 'lucide-react';

import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthPovider/AuthPovider';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProperty = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // Assuming the property ID is passed as a route parameter
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [initialData, setInitialData] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Fetch the property data to populate the form
    const fetchPropertyData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:9000/propertie/${id}`);
        setInitialData(data);
        setImagePreview(data.photoURL);

        // Set default form values
        setValue('title', data.title);
        setValue('location', data.location);
        setValue('priceMin', data.priceRange.min);
        setValue('priceMax', data.priceRange.max);
        setValue('description', data.description);
      } catch (error) {
        console.error('Error fetching property data:', error);
        toast.error('Failed to fetch property data.');
      }
    };

    fetchPropertyData();
  }, [id, setValue]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    try {
      let photoURL = initialData.photoURL;

      // Upload new image if selected
      if (selectedImage) {
        const formData = new FormData();
        formData.append('image', selectedImage);

        const { data: imgResponse } = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_api_key}`,
          formData
        );

        photoURL = imgResponse.data.display_url;
      }

      // Validate price range
      const priceMin = parseFloat(data.priceMin);
      const priceMax = parseFloat(data.priceMax);

      if (priceMin > priceMax) {
        toast.error('Minimum price cannot be greater than maximum price');
        return;
      }

      // Prepare updated data
      const updatedData = {
        ...data,
        photoURL,
        priceRange: {
          min: priceMin,
          max: priceMax,
        },
      };

      // Update property data
      const { data: updateResponse } = await axios.patch(
        `http://localhost:9000/property/${id}`,
        updatedData
      );

      if (updateResponse.modifiedCount > 0) {
        toast.success('Property updated successfully');
        navigate(`/dashboard//agent/my-properties`); // Redirect to property details page
      }
    } catch (error) {
      console.error('Error updating property:', error.response?.data || error.message);
      toast.error('Failed to update property.');
    }
  };

  if (!initialData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Update Property</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mx-auto h-64 w-full object-cover rounded-md"
                  />
                ) : (
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                )}
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-500 hover:text-blue-600">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Property Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Title
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                {...register('title', { required: 'Title is required' })}
                className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                {...register('location', { required: 'Location is required' })}
                className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
            )}
          </div>

          {/* Price Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  {...register('priceMin', { required: 'Minimum price is required' })}
                  className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.priceMin && (
                <p className="mt-1 text-sm text-red-600">{errors.priceMin.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  {...register('priceMax', { required   : 'Maximum price is required' })}
                  className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.priceMax && (
                <p className="mt-1 text-sm text-red-600">{errors.priceMax.message}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          {/* Agent Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Agent Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={user?.displayName || ''}
                  disabled
                  className="pl-10 w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Agent Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="pl-10 w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                />
              </div>
            </div>
          </div>


      

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md p-3 hover:bg-blue-600 transition duration-200"
            >
              Update Property
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProperty