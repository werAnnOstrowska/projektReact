import { useEffect, useState, useRef } from "react";
import type { UnsplashImage } from "../../types";  
import imagesDownload from "../../api";
import ProductListBase from "./ProductListBase";
import withLoading from "../HOC/withLoading";
import {} from "../../stylesheet/ProductList.css"


const ProductListWithLoading = withLoading(ProductListBase);

const ProductList = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchImages = async () => {
      const result = await imagesDownload();
      setImages(result);
    };

    fetchImages();
  }, []);

  return (
    <ProductListWithLoading
      images={images}
      isLoading={images.length === 0}
    />
  );
};

export default ProductList;
