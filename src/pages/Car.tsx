
import React, { Component } from "react";



import products from "../static/product"; 
import FavButton from "../componats/FavButton";
import { FavoritesContextProvider } from "../context/FavoritesContext";






interface Product {
  id: number;
  price: number;
  image: string;
  name: string;
  description: string;
}

export default class Car extends Component {
 
  render() {
    return (
      <>
        <FavoritesContextProvider>
        <br />
        <br />


      <div className="flex justify-center items-center px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
    {products.map((product: Product) => (
      <div
        key={product.id}
        className="relative bg-white shadow-md rounded-lg overflow-hidden"
      >
        <img
          src={product.image}
          alt="#"
          className="w-64 h-48 object-cover rounded-md mx-auto"
        />
        <div className="text-center bg-gray-100 p-4">
         <h3 className="text-lg font-semibold text-purple-600">
  {product.name}
</h3>

          <p className="text-sm text-gray-600">{product.description}</p>
          <h5 className="font-bold">{product.price} EGP</h5>
          <br />


<FavButton product={product} />


        </div>
      </div>
    ))}
  </div>
</div>
  </FavoritesContextProvider>


      </>
    );
  }
}


