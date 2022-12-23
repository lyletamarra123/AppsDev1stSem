import { Product } from "../models";

export type ShopState = {
    products: Product[],
    wishlist: Product[],
    total: number,
    addToCart: any,
    removeItem: any,
    addToWL: any,
}

export const initialState = {
    products: [],
    wishlist: [],
    total: 0,
    addToCart: null,
    removeItem: null,
    addToWL: null,
}