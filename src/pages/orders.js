import Header from "@/Components/Header";
import { useSession } from "next-auth/react";

function Orders({ orders }) {
  const { data: session } = useSession();
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg p-10 mx-auto">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        {session ? (
          <h2>x orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4"></div>
      </main>
    </div>
  );
}

export default Orders;

{
  /*export async function getServerSideProps(context) {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
    
    // Get users logged in credentials
    const session = getSession(context);

    if(!session) {
        return {
            props: {}
        };
    }


    // Firebase db
    const stripeOrders = await db
    .collection("users")
    .doc((await session).user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
.get();

// Stripe orders

const orders =  await Promise.all(
    stripeOrders.docs.map(async (order) => ({




    }))
)

}*/
}
