import Image from "next/image";
import Product from "./Product";
import { useSelector } from "react-redux";
import { selectCategory, selectSearchString } from "@/slices/productSlice";
import ADVERT from "../../public/assets/advert.png";

function ProductZone({ products }) {
  const searchString = useSelector(selectSearchString);
  const category = useSelector(selectCategory);
  // Filter products based on the search string
  const filteredProducts = products.filter(
    (product) =>
      !searchString || product.title.toLowerCase().includes(searchString)
  );

  // Filter products based on the selected category
  const categoryFilteredProducts =
    category === null
      ? filteredProducts
      : filteredProducts.filter((product) => product.category === category);

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {categoryFilteredProducts
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => {
          if (searchString && !title.toLowerCase().includes(searchString)) {
            return null; // Skip rendering the component if the searchString doesn't match the title.
          }

          return (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}

      {!searchString && (
        <Image
          className="md:col-span-full"
          src={ADVERT}
          width={1530}
          height={0}
          objectFit="contain"
          alt="Advert"
        />
      )}

      <div className=" md:col-span-2">
        {categoryFilteredProducts
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => {
            if (searchString && !title.toLowerCase().includes(searchString)) {
              return null; // Skip rendering the component if the searchString doesn't match the title.
            }

            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            );
          })}
      </div>
      {!searchString && (
        <Image
          className="md:col-span-full"
          src="https://links.papareact.com/dyz"
          width={1530}
          height={0}
          objectFit="contain"
          alt="Advert"
        />
      )}
      {categoryFilteredProducts
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => {
          if (searchString && !title.toLowerCase().includes(searchString)) {
            return null; // Skip rendering the component if the searchString doesn't match the title.
          }

          return (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}
    </div>
  );
}

export default ProductZone;
