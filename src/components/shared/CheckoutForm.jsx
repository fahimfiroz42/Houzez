
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';

import '../../App.css';
import { CreditCard } from 'lucide-react';
import { useEffect, useState } from 'react';
import { use } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const CheckoutForm = ({purchaseInfo, refetch}) => {
  const stripe = useStripe();
  const elements = useElements();
  
  const [clientSecret, setClientSecret] = useState('');
  useEffect(() => {
      getPaymentIntent()
  },[])

  const getPaymentIntent = async () => {
    try {
        const {data}=await axios.post(`https://houzez-server.vercel.app/create-payment-intent`,{
        offerAmount:purchaseInfo?.offerAmount 
        })
        setClientSecret(data.clientSecret);
        console.log(data.clientSecret);
        return data
       
    } catch (error) {
        console.log(error);
        
    }

  }





  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
   const {paymentIntent} =await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: purchaseInfo?.buyerName,
            email: purchaseInfo?.buyerEmail
          },
        },
      })
  
      console.log(paymentIntent);

      if(paymentIntent.status === 'succeeded'){
        try {

        const { data } = await axios.patch(`https://houzez-server.vercel.app/offers/${purchaseInfo?._id}/bought`, {
              transactionId: paymentIntent?.id
            });
      
            toast.success(data.message || 'Payment successfully!');
            refetch();
            
          } catch (error) {
            console.error(error);
            toast.error('Failed to accept the offer. Please try again.');
          
          }

      }

     


  };
   

  


  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
       <button
                type="submit"
                disabled={!stripe}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex items-center justify-center"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Pay {purchaseInfo?.offerAmount?.toLocaleString()}
                {/* Pay ${selectedProperty.offerAmount.toLocaleString()} */}
       </button>
    
    </form>
  );
};

export default CheckoutForm;