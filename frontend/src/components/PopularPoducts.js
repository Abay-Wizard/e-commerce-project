import React from "react";

const PopularProducts = () => {
  const products = [
    {
      title: "Electronics",
      img: "https://as1.ftcdn.net/v2/jpg/01/76/97/56/1000_F_176975606_NENcObythCwyPxA6n5vSKxwc8lVLa3In.jpg",
    },
    {
      title: "Shoes",
      img: "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg",
    },
    {
      title: "T-shirt",
      img: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?cs=srgb&dl=pexels-anna-nekrashevich-8532616.jpg&fm=jpg",
    },
    {
      title: "Gifts",
      img: "https://media.istockphoto.com/id/1443034333/photo/christmas-or-birthday-gift-box-on-white-wooden-table-against-blue-turquoise-bokeh-lights.jpg?s=612x612&w=0&k=20&c=9EzZqIg271JMqgd5m6JutoPxrsKtQAXzM-r_QyHTkws=",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Popular Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                {product.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
