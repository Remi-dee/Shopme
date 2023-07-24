import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import {
  Bars3Icon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/cartSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center  bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 px-4 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={130}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            alt="Website Logo"
          />
        </div>

        {/* Search Bar */}
        <div className=" hidden sm:flex m-l-2 bg-amazon_yellow h-10 rounded-md flex-grow cursor-pointer items-center hover:bg-yellow-500">
          <input
            className="p-4 h-full w-6 flex-grow rounded-l-md focus:outline-none"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* Right bar */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer link"
          >
            <p className="hover:underline w">
              {session ? `Hello, ${session.user.email}` : "Sign in"}
            </p>
            <p className="font-extrabold  md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns &</p>
            <p className="font-extrabold  md:text-sm">Orders</p>
          </div>

          {/*carticon*/}
          <div className="relative link flex items-center">
            <span className="absolute top-2 right-4 md:right-11 font-bold text-yellow-400">
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
      <div className="flex items-start space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
        <p className="flex items-center link">
          <Bars3Icon className="h-6 mr-1 " />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Gorcery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal</p>
      </div>
    </header>
  );
}

export default Header;
