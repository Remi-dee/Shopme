import Header from "@/Components/Header";
import moment from "moment/moment";
import { getSession, useSession } from "next-auth/react";
import db from "../../firebase";
import {
  collection,
  query,
  orderBy,
  getDocs,
  doc,
  getFirestore,
} from "firebase/firestore";
import Order from "@/Components/Order";

function Orders({ orders }) {
  // const { data: session } = useSession();
  const { data: session } = useSession();
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg p-10 mx-auto">
        <h1 className="text-3xl border-b mb-2 pb-1 border-orange-400">
          Your Orders
        </h1>
        {session ? (
          <h2>{orders?.length} orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {session &&
            orders?.map(
              ({ id, amount, amountShipping, items, timestamp, images }) => (
                <>
                  <Order
                    key={id}
                    id={id}
                    amount={amount}
                    amountShipping={amountShipping}
                    items={items}
                    timestamp={timestamp}
                    images={images}
                  />
                </>
              )
            )}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // Get users logged in credentials
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  // Firebase db
  // const stripeOrders = await db
  //   .collection("users")
  //   .doc(session.user.email)
  //   .collection("orders")
  //   .orderBy("timestamp", "desc")
  //   .get();

  //const docRef = doc(db, `users/${session.user.email}`);
  // const colRef = doc(docRef, "orders")
  // const stripeOrders = await getDoc(docRef);
  //const stripeOrders = query(docRef, orderBy("timestamp", "desc"));
  // Stripe orders

  // Assuming stripeOrders is the original query
  const stripeOrdersRef = collection(db, "users", session.user.email, "orders");
  const orderedStripeOrdersRef = query(
    stripeOrdersRef,
    orderBy("timestamp", "desc")
  );

  const stripeOrdersSnapshot = await getDocs(orderedStripeOrdersRef);
  const orders = await Promise.all(
    stripeOrdersSnapshot.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
