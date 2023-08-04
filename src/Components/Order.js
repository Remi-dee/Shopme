import moment from "moment/moment";
import Image from "next/image";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  const currencyCode = "USD";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });

  return (
    <div className="relative border rounded-md ">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
        </div>

        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>
            {formatter.format(amount)} - Next Day Delivery{" "}
            {formatter.format(amountShipping)}
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <Image src={image} alt="Items images" width={100} height={100} className="h-20 ogject-contain" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
