import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BANNER from "../../public/assets/banner2.png";
import ADVERT from "../../public/assets/advert.png";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt="Banner 1"
          />
        </div>

        <div>
          <Image
            loading="lazy"
            src={ADVERT}
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt="Banner 1"
          />
        </div>

        <div>
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt="Banner 1"
          />
        </div>

        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/gi1"
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt="Banner 1"
          />
        </div>

        <div>
          <Image
            loading="lazy"
            src={BANNER}
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt="Banner 1"
          />
        </div>

        <div>
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt="Banner 1"
          />
        </div>

        <div>
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt="Banner 1"
          />
        </div>

        <div>
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt="Banner 1"
          />
        </div>

        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/6ff"
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt="Banner 2"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/7ma"
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt="Banner 3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
