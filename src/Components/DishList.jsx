import React,{useState} from "react";

const menuData = 
{
  "categories": [
    {
      "type": "Vegetarian",
      "sections": [
        {
          "name": "Starters",
          "dishes": [
            "Paneer Tikka",
            "Hara Bhara Kebab",
            "Vegetable Spring Rolls",
            "Cheese Corn Balls",
            "Stuffed Mushrooms",
            "Vegetable Pakoras",
            "Dhokla",
            "Aloo Chaat"
          ]
        },
        {
          "name": "Main Course",
          "subcategories": [
            {
              "type": "Paneer",
              "dishes": [
                "Paneer Butter Masala",
                "Kadai Paneer",
                "Shahi Paneer",
                "Palak Paneer",
                "Paneer Tikka Masala",
                "Paneer Lababdar"
              ]
            },
            {
              "type": "Vegetables",
              "dishes": [
                "Mixed Vegetable Curry",
                "Bhindi Masala",
                "Aloo Gobi",
                "Baingan Bharta",
                "Chana Masala",
                "Methi Malai Mutter",
                "Dum Aloo"
              ]
            },
            {
              "type": "Rice",
              "dishes": [
                "Vegetable Pulao",
                "Jeera Rice",
                "Veg Biryani",
                "Curd Rice",
                "Lemon Rice"
              ]
            },
            {
              "type": "Bread",
              "dishes": [
                "Butter Naan",
                "Tandoori Roti",
                "Lachha Paratha",
                "Missi Roti",
                "Stuffed Kulcha",
                "Rumali Roti"
              ]
            }
          ]
        },
        {
          "name": "Desserts",
          "dishes": [
            "Gulab Jamun",
            "Rasmalai",
            "Gajar Halwa",
            "Jalebi",
            "Kulfi",
            "Moong Dal Halwa",
            "Kheer",
            "Besan Ladoo"
          ]
        },
        {
          "name": "Beverages",
          "dishes": [
            "Masala Chai",
            "Lassi",
            "Jaljeera",
            "Aam Panna",
            "Thandai",
            "Filter Coffee",
            "Nimbu Pani"
          ]
        }
      ]
    },
    {
      "type": "Non-Vegetarian",
      "sections": [
        {
          "name": "Starters",
          "dishes": [
            "Chicken Tikka",
            "Mutton Seekh Kebab",
            "Fish Amritsari",
            "Prawn Tempura",
            "Chicken Malai Tikka",
            "Tandoori Chicken",
            "Chicken Lollipop",
            "Egg Pakora"
          ]
        },
        {
          "name": "Main Course",
          "subcategories": [
            {
              "type": "Chicken",
              "dishes": [
                "Butter Chicken",
                "Chicken Curry",
                "Chicken Chettinad",
                "Kadai Chicken",
                "Chicken Do Pyaza",
                "Chicken Biryani"
              ]
            },
            {
              "type": "Mutton",
              "dishes": [
                "Mutton Rogan Josh",
                "Mutton Korma",
                "Mutton Curry",
                "Mutton Biryani",
                "Keema Matar",
                "Laal Maas"
              ]
            },
            {
              "type": "Fish & Seafood",
              "dishes": [
                "Fish Curry",
                "Goan Fish Curry",
                "Prawn Masala",
                "Crab Curry",
                "Fish Tikka Masala"
              ]
            },
            {
              "type": "Rice",
              "dishes": [
                "Chicken Biryani",
                "Mutton Biryani",
                "Egg Fried Rice",
                "Fish Pulao",
                "Seafood Fried Rice"
              ]
            },
            {
              "type": "Bread",
              "dishes": [
                "Garlic Naan",
                "Butter Naan",
                "Tandoori Roti",
                "Keema Paratha",
                "Egg Paratha"
              ]
            }
          ]
        },
        {
          "name": "Desserts",
          "dishes": [
            "Gulab Jamun",
            "Rasmalai",
            "Caramel Custard",
            "Phirni",
            "Shahi Tukda",
            "Pineapple Halwa",
            "Chocolate Mousse"
          ]
        },
        {
          "name": "Beverages",
          "dishes": [
            "Masala Chai",
            "Cold Coffee",
            "Lassi",
            "Fruit Punch",
            "Mocktails",
            "Nimbu Soda",
            "Beer",
            "Whiskey"
          ]
        }
      ]
    }
  ]
};

const DishList = () => {
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Catering Menu</h1>
      <div className="filterbar flex gap-12">
        {/* <h2>filter</h2> */}
      {menuData.categories.map((category, index) => (
        <div key={index} className="mb-6 ">
          <input type="radio" name={index} id={index} />
          <label className="ml-2" htmlFor={index}>{category.type}</label>
        </div>
      ))}
      </div>
      {menuData.categories.map((category, index) => (
        <div key={index} className="mb-6">
  
          {category.sections.map((section, secIndex) => (
            <div key={secIndex} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
              {section.dishes && (
                <ul className="ml-4 list-disc">
                  {section.dishes.map((dish, dishIndex) => (
                    // <li key={dishIndex} className="mb-1">
                    //   <span className="font-sm">{dish}</span> 
                    // </li>
                     <div class="flex items-center" key={index}>
                     <input onChange={(event) => handleCheckboxChange(event, dish)}
                       type="checkbox" id="item1" class="mr-2 h-5 w-5 text-green-500" />
                     <label for="item1" class="text-lg">{dish}</label>
                   </div>
                  ))}
                </ul>
              )}
              {section.subcategories &&
                section.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="ml-4 mb-2">
                    <h4 className="text-md font-medium">{subcategory.type}</h4>
                    <ul className="ml-4 list-disc">
                      {subcategory.dishes.map((dish, dishIndex) => (
                        <div class="flex items-center" key={index}>
                        <input onChange={(event) => handleCheckboxChange(event, dish)}
                          type="checkbox" id="item1" class="mr-2 h-5 w-5 text-green-500" />
                        <label for="item1" class="text-lg">{dish}</label>
                      </div>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DishList;
