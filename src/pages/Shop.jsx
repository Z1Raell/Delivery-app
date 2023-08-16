import React, { useState } from "react";
import { RestoranList } from "../component/restoranList";
import { Menu } from "../component/Menu";

const restaurants = [
  {
    name: "McDonald's",
    address: "123 Main Street",
    menu: [
      {
        name: "Cheeseburger",
        price: 130,
        img: "cheeseburger.jpg",
      },
      {
        name: "McChicken",
        price: 90,
        img: "mcchicken.jpg",
      },
      {
        name: "Big Taste",
        price: 170,
        img: "bigtaste.jpg",
      },
      {
        name: "Nuggets",
        price: 50,
        img: "nuggets.jpg",
      },
    ],
  },
  {
    name: "Burger King",
    address: "456 Oak Avenue",
    menu: [
      {
        name: "Whopper",
        price: 150,
        img: "whopper.jpg",
      },
      {
        name: "Chicken Royale",
        price: 120,
        img: "chickenroyale.jpg",
      },
      {
        name: "Cheesy Fries",
        price: 80,
        img: "cheesyfries.jpg",
      },
      {
        name: "Onion Rings",
        price: 60,
        img: "onionrings.jpg",
      },
    ],
  },
  {
    name: "KFC",
    address: "789 Elm Street",
    menu: [
      {
        name: "Original Recipe Chicken",
        price: 140,
        img: "originalrecipe.jpg",
      },
      {
        name: "Zinger Burger",
        price: 110,
        img: "zingerburger.jpg",
      },
      {
        name: "Twister Wrap",
        price: 120,
        img: "twister.jpg",
      },
      {
        name: "Popcorn Chicken",
        price: 70,
        img: "popcornchicken.jpg",
      },
    ],
  },
  {
    name: "Pizza Hut",
    address: "101 Maple Lane",
    menu: [
      {
        name: "Supreme Pizza",
        price: 180,
        img: "supremepizza.jpg",
      },
      {
        name: "Pepperoni Lover's Pizza",
        price: 160,
        img: "pepperonipizza.jpg",
      },
      {
        name: "Veggie Delight Pizza",
        price: 150,
        img: "veggiepizza.jpg",
      },
      {
        name: "Stuffed Crust Pizza",
        price: 200,
        img: "stuffedcrustpizza.jpg",
      },
    ],
  },
  {
    name: "Subway",
    address: "555 Pine Street",
    menu: [
      {
        name: "Italian BMT",
        price: 120,
        img: "italianbmt.jpg",
      },
      {
        name: "Turkey & Cheese",
        price: 100,
        img: "turkeycheese.jpg",
      },
      {
        name: "Veggie Delite",
        price: 90,
        img: "veggiedelite.jpg",
      },
      {
        name: "Chicken Teriyaki",
        price: 130,
        img: "chickenteriyaki.jpg",
      },
    ],
  },
  {
    name: "Domino's Pizza",
    address: "222 Oak Street",
    menu: [
      {
        name: "ExtravaganZZa Pizza",
        price: 170,
        img: "extravaganzza.jpg",
      },
      {
        name: "MeatZZa Pizza",
        price: 160,
        img: "meatzza.jpg",
      },
      {
        name: "Deluxe Veggie Pizza",
        price: 150,
        img: "deluxeveggie.jpg",
      },
      {
        name: "Chicken Bacon Ranch Pizza",
        price: 180,
        img: "chickenbaconranch.jpg",
      },
    ],
  },
  {
    name: "Taco Bell",
    address: "333 Cedar Street",
    menu: [
      {
        name: "Crunchwrap Supreme",
        price: 120,
        img: "crunchwrapsupreme.jpg",
      },
      {
        name: "Quesarito",
        price: 110,
        img: "quesarito.jpg",
      },
      {
        name: "Doritos Locos Tacos",
        price: 90,
        img: "doritostacos.jpg",
      },
      {
        name: "Cheesy Gordita Crunch",
        price: 130,
        img: "cheesygorditacrunch.jpg",
      },
    ],
  },
  {
    name: "Wendy's",
    address: "444 Elm Street",
    menu: [
      {
        name: "Dave's Single",
        price: 140,
        img: "davessingle.jpg",
      },
      {
        name: "Spicy Chicken Sandwich",
        price: 120,
        img: "spicychickensandwich.jpg",
      },
      {
        name: "Baconator",
        price: 160,
        img: "baconator.jpg",
      },
      {
        name: "Natural Cut Fries",
        price: 70,
        img: "fries.jpg",
      },
    ],
  },
  {
    name: "Starbucks",
    address: "555 Willow Avenue",
    menu: [
      {
        name: "Caffè Latte",
        price: 130,
        img: "caffelatte.jpg",
      },
      {
        name: "Caramel Macchiato",
        price: 150,
        img: "caramelmacchiato.jpg",
      },
      {
        name: "Iced Coffee",
        price: 110,
        img: "icedcoffee.jpg",
      },
      {
        name: "Chocolate Croissant",
        price: 80,
        img: "chocolatecroissant.jpg",
      },
    ],
  },
  {
    name: "Papa John's Pizza",
    address: "666 Maple Avenue",
    menu: [
      {
        name: "The Works Pizza",
        price: 160,
        img: "theworks.jpg",
      },
      {
        name: "BBQ Chicken Bacon Pizza",
        price: 150,
        img: "bbqchickenbacon.jpg",
      },
      {
        name: "Spinach Alfredo Pizza",
        price: 140,
        img: "spinachalfredo.jpg",
      },
      {
        name: "Garden Fresh Pizza",
        price: 130,
        img: "gardenfresh.jpg",
      },
    ],
  },
  {
    name: "Panera Bread",
    address: "777 Pine Avenue",
    menu: [
      {
        name: "Bacon Turkey Bravo Sandwich",
        price: 120,
        img: "baconturkeybravo.jpg",
      },
      {
        name: "Frontega Chicken Panini",
        price: 130,
        img: "frontegachicken.jpg",
      },
      {
        name: "Mediterranean Veggie Sandwich",
        price: 110,
        img: "mediterraneanveggie.jpg",
      },
      {
        name: "Broccoli Cheddar Soup",
        price: 90,
        img: "broccolicheddar.jpg",
      },
    ],
  },
  {
    name: "Chick-fil-A",
    address: "888 Oak Avenue",
    menu: [
      {
        name: "Original Chicken Sandwich",
        price: 140,
        img: "originalchicken.jpg",
      },
      {
        name: "Spicy Deluxe Sandwich",
        price: 150,
        img: "spicydeluxe.jpg",
      },
      {
        name: "Nuggets",
        price: 120,
        img: "nuggets.jpg",
      },
      {
        name: "Waffle Fries",
        price: 80,
        img: "wafflefries.jpg",
      },
    ],
  },
];

export const Shop = ({ shopList, setShopList }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const selectRestaurant = (restaurant) => {
    if (shopList.length > 0) {
      setShowConfirmation(true);
    } else {
      setSelectedRestaurant(restaurant);
      setShopList([]);
    }
  };
  const confirmRestaurantChange = () => {
    setSelectedRestaurant(null);
    setShopList([]);
    setShowConfirmation(false);
  };

  const cancelRestaurantChange = () => {
    setShowConfirmation(false);
  };

  const addToShopList = (item) => {
    const existingItem = shopList.find(
      (shopItem) => shopItem.name === item.name
    );

    if (existingItem) {
      const updatedShopList = shopList.map((shopItem) => {
        if (shopItem.name === item.name) {
          return { ...shopItem, quantity: shopItem.quantity + 1 };
        }
        return shopItem;
      });
      setShopList(updatedShopList);
    } else {
      setShopList([...shopList, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <RestoranList
        selectRestaurant={selectRestaurant}
        restaurants={restaurants}
      />
      {selectedRestaurant ? (
        <Menu
          restaurant={selectedRestaurant}
          addToShopList={addToShopList}
          shopList={shopList}
        />
      ) : (
        <div>Please select a restaurant</div>
      )}
      {showConfirmation && (
        <div className="confirmation-modal">
          <p>Changing the restaurant will clear your cart. Are you sure?</p>
          <button onClick={confirmRestaurantChange}>Yes</button>
          <button onClick={cancelRestaurantChange}>No</button>
        </div>
      )}
    </div>
  );
};
