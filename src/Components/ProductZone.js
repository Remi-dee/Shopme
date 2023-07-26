import Image from "next/image";
import Product from "./Product";
import { useSelector } from "react-redux";
import { selectString } from "@/slices/productSlice";

function ProductZone({ products }) {
  const searchString = useSelector(selectString);

  // Filter products based on the search string
  const filteredProducts = products.filter(
    (product) =>
      !searchString || product.title.toLowerCase().includes(searchString)
  );

  // Filter products based on the selected category
  const categoryFilteredProducts =
    selectedCategory === null
      ? filteredProducts
      : filteredProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
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
          src="https://links.papareact.com/dyz"
          width={1500}
          height={0}
          objectFit="contain"
          alt="Advert"
        />
      )}
      <div className=" md:col-span-2">
        {products
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

      {products
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
