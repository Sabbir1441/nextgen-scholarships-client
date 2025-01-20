import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error , paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error' , error)
        }
        else{
            console.log('payment method' , paymentMethod)
        }
    }
    return (
        <div className="flex justify-center items-center my-10">
            <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Secure Payment
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Complete your payment by entering your card details below.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-inner">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        fontFamily: 'Arial, sans-serif',
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
                    </div>
                    <button
                        type="submit"
                        disabled={!stripe}
                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 disabled:bg-gray-400 transition-all"
                    >
                        Pay Securely
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        Your payment is encrypted and secure. <br />
                        
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;