import React from "react";
import ProductDisplay from "../components/ProductDisplay";
import PrevNextPage from "../components/PrevNextPage";

const Shop = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ProductDisplay />

        <div className="mt-16">
          <PrevNextPage />
        </div>
      </section>
    </main>
  );
};

export default Shop;
