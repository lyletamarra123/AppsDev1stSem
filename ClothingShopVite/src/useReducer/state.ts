import { Product } from "../models";

export type ShopState = {
    products: Product[],
    total: number,
    addToCart: any,
    removeItem: any,
    addToWL: any,
}

export const initialState = {
    products: [],
    total: 0,
    addToCart: null,
    removeItem: null,
    addToWL: null,
}