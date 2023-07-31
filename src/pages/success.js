import Header from "@/Components/Header";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

function Success() {
  const router = useRouter();

  return (
    <div className=" bg-gray-100 h-screen ">
      <Header />
      <main className="max-w-screen-lg  mx-auto ">
        <div className="bg-white p-10 flex flex-col ">
          <div className="flex ">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl pb-2">
              Thank you for choosing Shopme, your order has been confirmed!
            </h1>
          </div>
          <p className="">
            Thank you for shopping with us, We&apos;ll send a confirmation once
            your item has been shipped, if you would like to check the status of
            your order, please click the link below
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
