import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LOGO from "../../public/assets/logo.png";

import {
  Bars3Icon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "@/slices/cartSlice";
import {
  selectSearchString,
  setSearchString,
  setSelectedCategory,
} from "@/slices/productSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const dispatch = useDispatch();
  const searchString = useSelector(selectSearchString);

  const categories = [
    { name: "Electronics", style: "link" },
    { name: "Men's Clothing", style: "link hidden lg:inline-flex" },
    { name: "Women's Clothing", style: "link" },
    { name: "jewelery", style: "link" },
  ];

  const handleCategoryClick = (category) => {
    router.push("/");
    dispatch(setSelectedCategory(category.toLowerCase()));
  };

  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center  bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 px-4 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => {
              dispatch(setSelectedCategory(null));

              router.push("/");
            }}
            src={LOGO}
            width={null}
            height={40}
            objectFit="contain"
            className="cursor-pointer w-[90px] md:w-[150px] "
            alt="Website Logo"
          />
        </div>

        {/* Search Bar */}
        <div className=" hidden sm:flex m-l-2 bg-shopme_orange-light h-10 rounded-md flex-grow cursor-pointer items-center hover:bg-yellow-500">
          <input
            className="p-4 h-full w-6 flex-grow rounded-l-md focus:outline-none"
            type="text"
            value={searchString}
            onChange={(e) => dispatch(setSearchString(e.target.value))}
          />

          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* Right bar */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer link"
          >
            <p className="hover:underline max-w-4 break-all ">
              {session
                ? `Hello, ${session.user.email.split("@")[0]}`
                : "Sign in"}
            </p>
            <p className="font-extrabold  md:text-xs">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns &</p>
            <p className="font-extrabold  md:text-sm">Orders</p>
          </div>

          {/*carticon*/}
          <div className="relative link flex items-center">
            <span className="absolute top-2 right-4 md:right-11 font-bold text-shopme_orange-light">
              {items.length}
            </span>
            <ShoppingCartIcon
              onClick={() => router.push("/checkout")}
              className="h-10"
            />
            <p className="hidden md:inline font-extrabold  md:text-sm mt-5">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start space-x-3 p-2  bg-gray-200 text-black">
        {/* <p className="flex items-center link">
          <Bars3Icon className="h-6 mr-1 " />
          All
        </p> */}

        {categories.map((categoryObj) => (
          <div
            key={categoryObj.name}
            onClick={() => handleCategoryClick(categoryObj.name)}
            className="cursor-pointer link"
          >
            <p className={categoryObj.style}>{categoryObj.name}</p>
            {/* You can add the corresponding subtitle or other elements for each category */}
          </div>
        ))}

        {/* <p className="link hidden lg:inline-flex">Prime Video</p>
        <p className="link hidden lg:inline-flex">Amazon Business</p>
        <p className="link hidden lg:inline-flex">Today&apos;s Deal</p>

        <p className="link hidden lg:inline-flex ">Food & Gorcery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal</p> */}
      </div>
    </header>
  );
}

export default Header;
