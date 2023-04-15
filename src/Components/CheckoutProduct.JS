import { removeFromcart } from "@/slices/cartSlice";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const currencyValue = price;
  const currencyCode = "USD";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });
  const formattedCurrency = formatter.format(currencyValue);
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    //Remove the product item from redux store
    dispatch(removeFromcart({ id }));
  };

  return (
    <div className="grid grid-cols-5 ">
      {/*Product left*/}
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        alt="Product"
      />
      {/*Product medium*/}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500 z-10" />
            ))}
        </div>
        <p className=" text-xs my-2 line-clamp-3">{description}</p>
        <div className="">{formattedCurrency}</div>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt="Prime"
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>

      {/*Product Right*/}
      <div>
        <button onClick={removeItemFromCart} className="button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
