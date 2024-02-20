import { MouseEventHandler } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  image: string;
}

export type ButtonProps = {
  title?: string;
  buttonStyles?: string;
  btnType: "button" | "submit";
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};
