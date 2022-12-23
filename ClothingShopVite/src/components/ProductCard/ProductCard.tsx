import { AddButton, SubTitle,TextContainer,Title,Wrapper,} from './ProductCard.styled';

import { useState, useEffect, useContext } from 'react';
import { Product } from '../../models';
import { ClothingShopContext} from '../../useContext';

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const {products, addToCart, addToWL, removeItem, wishlist} = useContext(ClothingShopContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const itemInCart = products.find((product: { name: string; }) => product.name === name);

    if (itemInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);
  
  useEffect(() => {
    const itemInWishlist = wishlist.find((product: { name: string; }) => product.name === name);

    if (itemInWishlist) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [wishlist, name]);

  const handleClick = () => {
    const product = {name, imageUrl, price};
    if(isInCart){
      removeItem(product);
      setIsInCart(false);
    } else{
      addToCart(product);
      setIsInCart(true);
    }
  }

  const handleWishClick = () => {
    const product = {name, imageUrl, price};
    if(isInWishlist){
      removeItem(product);
      setIsInWishlist(false);
    } else{
      addToWL(product);
      setIsInWishlist(true);
    }
  }

  return (
    <Wrapper background={imageUrl}>
      <button onClick={handleWishClick}>
      <p>{isInWishlist? "Remove from wishlist" : "Add to wishlist"}</p>
      </button>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart? "-" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};