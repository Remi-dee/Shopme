import Header from "@/Components/Header";
import { selectItems, selectTotal } from "@/slices/cartSlice";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "@/Components/CheckoutProduct.js";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  const currencyValue = total;
  const currencyCode = "USD";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });
  const formattedCurrency = formatter.format(currencyValue);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //call the backend to create a session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    // redirect user to Stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/*left division*/}
        <div className="flex-grow m-5 shadow-md">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            alt="Checkout product"
            objectFit="contain"
            className="cursor-pointer"
          />

          <div className="flex flex-col p-3 space-y-10 bg-white  ">
            <h1 className="text-3xl border-b pb-4">
              {items.length > 0
                ? "Your Shopping Cart"
                : "Your Shopzone Cart is Empty"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/*right division*/}

        <div className="flex flex-col bg-white p-10 shadow-md">
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} item): {}
              <span>{formattedCurrency}</span>
            </h2>

            <button
              role="Link"
              onClick={createCheckoutSession}
              // disabled={!session}
              className={`button mt-2 ${
                !session &&
                `from-gray-300 to-gray-500 border-gray-200 text-gray-300  cursor-not-allowed`
              }`}
            >
             Yea {/* {!session ? "Please sign in to checkout" : "Proceed to checkout"} */}
            </button>
          </>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
