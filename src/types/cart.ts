export interface ICartItem {
  id: string;
  imageUrl: string;
  name: string;
  types: 'тонкое' | 'традиционное';
  size: 26 | 30 | 40;
  price: number;
  totalPrice: number;
  count: number;
}

export interface ICart {
  carts: Array<ICartItem>;
  totalPrise: number;
  totalCount: number;
}
