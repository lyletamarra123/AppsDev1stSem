import { useContext } from "react";
import { ClothingShopContext, } from "../../useContext/shopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Wishlist.styled";

export const Wishlist = () => {
  const { products } = useContext(ClothingShopContext);
  return (
    <>
      <Title>You have 0 items in your wishlist.</Title>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};