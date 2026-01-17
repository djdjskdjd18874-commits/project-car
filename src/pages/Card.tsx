import { useFavorites } from "../hooks/useFavorites";

const FavoritesPage: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">المنتجات في السلة</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">لا توجد منتجات في السلة حاليا</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((product) => (
            <li
              key={product.id}
              className="border p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-700">السعر: {product.price} جنيه</p>
              </div>
              <button
                onClick={() => toggleFavorite(product)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                إزالة
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
