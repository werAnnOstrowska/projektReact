import { Grid, Flex } from "@radix-ui/themes";
import ProductCard2 from "./ProductCard";
import ShoppingCartBtn from "./ShoppingCartBtn";
import type { UnsplashImage } from "../../types";

type Props = {
  images: UnsplashImage[];
};

const ProductListBase = ({ images }: Props) => {
  return (
    <div className="products-container">
      <Flex direction="column" align="center">
        <div className="cart-icon">
          <ShoppingCartBtn />
        </div>
        <Grid columns="3" gap="4">
          {images.map((image) => (
            <div key={image.id}>
              <ProductCard2
                img={image.urls.thumb}
                altImg={image.alt_description ?? "Plant image"}
                title={
                  image.description
                    ? image.description.split(" ").slice(0, 2).join(" ")
                    : "Plant"
                }
                text="Lorem ipsum dolor sit amet"
                id={image.id}
              />
            </div>
          ))}
        </Grid>
      </Flex>
    </div>
  );
};

export default ProductListBase;
