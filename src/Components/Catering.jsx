import React, { useState } from 'react'
// import Plates from './Plates';
import DishList from './DishList';
import MenuList from './Plates';

const Catering = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // Handle checkbox change
  const handleCheckboxChange = (event, item) => {
    if (event.target.checked) {
      // Add item price to total if checked
      setSelectedItems([...selectedItems, item]);
      setTotalCost(totalCost + item.price);
    } else {
      // Remove item price from total if unchecked
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
      setTotalCost(totalCost - item.price);
    }
  }

  return (
    <div className="intro">
      <section class=" p-10 md:p-16 lg:p-20 bg-gray-100">
        <h1 class="text-4xl font-extrabold text-center text-amber-800 mb-8">
          Experience Culinary Excellence with <span class="text-amber-600">CELEBRATE TOGATHER</span>
        </h1>
        <p class="text-xl text-center text-gray-700 mb-6">
          At <span class="font-semibold">CELEBRATE TOGATHER</span>, we bring your events to life with mouthwatering dishes, tailored menus, and seamless service.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-white shadow-lg rounded-md">
            <h2 class="text-2xl font-bold text-amber-700 mb-4">Personalized Menus</h2>
            <p class="text-gray-600">
              Choose from a list of delicious cuisines crafted to match your event’s theme and your guests' preferences.
            </p>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-md">
            <h2 class="text-2xl font-bold text-amber-700 mb-4">Professional Service</h2>
            <p class="text-gray-600">
              From setup to cleanup, our team ensures everything is executed flawlessly so you can enjoy your event.
            </p>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-md">
            <h2 class="text-2xl font-bold text-amber-700 mb-4">Fresh Ingredients</h2>
            <p class="text-gray-600">
              We use only the finest ingredients to create meals that delight your taste buds and impress your guests.
            </p>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-md">
            <h2 class="text-2xl font-bold text-amber-700 mb-4">Versatile Options</h2>
            <p class="text-gray-600">
              Whether it's a buffet, plated service, or hors d'oeuvres, we cater to your unique style and event needs.
            </p>
          </div>
        </div>
      </section>


      <div className="plater bg-white px-4 py-8 flex items-center justify-center">
        <MenuList />
      </div>

    </div>
  )
}
export default Catering;