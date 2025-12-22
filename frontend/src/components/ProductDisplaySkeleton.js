import React from "react";

const ProductDisplaySkeleton = ({ count = 8 }) => {
  return (
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="w-full max-w-xs bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden animate-pulse group"
        >
       
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
          </div>

         
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />

            <div className="flex items-center justify-between mt-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20" />
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded-lg w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplaySkeleton;
