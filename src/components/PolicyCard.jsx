import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function PolicyCard({ title, description, imageUrl }) {
  return (
    <div className="m-4 flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0 flex items-center justify-around">
        <button
          className="show-details-button select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Show Details
        </button>
        <button
          className="add-to-cart-button select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all relative overflow-hidden"
          type="button"
          data-ripple-light="true"
        >
          <span className="text-content">Add To Cart</span>
          <span className="icon-content">
            <FaShoppingCart />
          </span>
        </button>
      </div>
    </div>
  );
}
