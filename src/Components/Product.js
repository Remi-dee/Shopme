import Image from "next/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, selectItems } from "@/slices/cartSlice";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Product({ id, title, price, description, category, image }) {
  // assign useDispatch hook to variable (dispatch)
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(true);

  //Format currency
  const currencyValue = price;
  const currencyCode = "USD";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });
  const formattedCurrency = formatter.format(currencyValue);

  //Add product as item to cart in redux store
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    //Dispatch the product as item to redux store
    dispatch(addTocart(product));
  };

  //Prevent hydration error with useffect
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className="relative flex flex-col  m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
        alt="Product"
        className=" mx-auto "
      />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">{formattedCurrency}</div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            src="https://links.papareact.com/fdw"
            width={48}
            height={25}
            objectFit="contain"
            alt="Prime"
          />

          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}
      <div className="flex justify-between mt-auto">
        <button onClick={addItemToCart} className="mt-auto button">
          Add to Cart
        </button>
        <div className="relative link flex items-center">
          <span className="text-xs absolute top-2 right-4 md:right-4 font-bold text-shopme_orange-default">
            {items.length}
          </span>
          <ShoppingCartIcon
            onClick={() => router.push("/checkout")}
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
