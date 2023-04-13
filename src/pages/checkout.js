import Header from "@/Components/Header";
import Image from "next/image";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/*left division*/}
        <div>
          <Image
            src="https://links.papareact.com/ikj.jpg"
            width={1020}
            height={250}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/*right division*/}

        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
