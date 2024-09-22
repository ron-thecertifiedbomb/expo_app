import { Product } from "@/interfaces/products/products";
import { atom } from "jotai";



export const allProductsAtom = atom<Product | null>(null);