export interface IPizza {
  imageUrl: string;
  name: string;
  types: Array<'тонкое' | 'традиционное'>;
  sizes: Array<{ size: 26 | 30 | 40; price: number }>;
  category: number;
  rating: number;
}
