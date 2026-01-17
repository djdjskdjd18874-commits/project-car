

import { useFavorites } from "../hooks/useFavorites";
import products from "../static/product";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

type Props = {
  product: Product;
  
};

const FavButton: React.FC<Props> = ({ product }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(product.id); // هنا نمرر id فقط

  return (
    <button
      onClick={() => toggleFavorite(product.id)} // هنا نمرر id فقط
      className={`px-4 py-2 rounded transition-colors
        ${favorite ? "bg-red-600 text-white" : "bg-gray-300 text-black hover:bg-gray-400"}`}
    >
      {favorite ? "إزالة من السلة" : "إضافة إلى السلة"}
    </button>
  );
};

export default FavButton;
console.log(FavButton);





