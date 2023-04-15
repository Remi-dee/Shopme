import Header from "@/Components/Header";
import { selectItems } from "@/slices/cartSlice";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "@/Components/CheckoutProduct";

function Checkout() {
  const items = useSelector(selectItems);

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

        <div>fdfdddgdf</div>
      </main>
    </div>
  );
}

export default Checkout;
