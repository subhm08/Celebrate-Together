import React from "react";
// import menuData 
import MenuData from "./MenuData.json"; 

const MenuCard = ({ plate }) => {
  return (
    <div className="max-w-sm border border-amber-700 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow flex flex-col justify-between">
      <div className="bg-gray-200 mb-1 py-2 rounded-t-lg">
      <h2 className="text-xl font-bold text-amber-700 text-center">{plate.title}</h2>
      <p className="text-gray-600  text-center">{plate.description}</p>
      </div>
     <div className="text-sm px-4 py-2">
        {Object.entries(plate.dishes).map(([category, items]) => (
          <div key={category} className="mb-3">
            <h3 className="font-semibold text-gray-700">{category}</h3>
            <ul className="list-disc list-inside text-gray-600">
              {items.map((dish, index) => (
                <li key={index}>{dish}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4 px-4 pb-2">
        <span className="text-lg font-bold text-green-600">₹{plate.price}</span>
        <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl px-4 py-1">Select</button>
      </div>
    </div>
  );
};

const MenuList = () => {
  return (
    <div className="min-h-screen">
      <header className=" bg-amber-700 text-white p-4 text-center font-bold text-3xl">
        Our Exclusive Menu
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white">
        {MenuData.categories.map((category) =>
          category.plates.map((plate) => (
            <MenuCard key={plate.id} plate={plate} />
          ))
        )}
      </main>
    </div>
  );
};

export default MenuList;
