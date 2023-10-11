import React from "react";
import { Images } from "../../../assets/images/Images";

function MenuCard() {
  // Products data
  const products = [
    {
      id: 1,
      img: Images.Delivery4,
      title: "Sushi cake",
      desc: "Sushi Cake is designed for bright events and unforgettable moments",
      price: "26.47",
      category: "delivery",
    },
    {
      id: 2,
      img: Images.Delivery2,
      title: "Secret set",
      desc: "Secret Sushi Set - affordable price and interesting presentation",
      price: "10.00",
      category: "delivery",
    },
    {
      id: 3,
      img: Images.Delivery3,
      title: "Deluxe sushi set",
      desc: "Deluxe Sushi Set - classic sushi rolls and a new taste. Multitasking range",
      price: "13.53",
      category: "delivery",
    },
    {
      id: 4,
      img: Images.Delivery1,
      title: "Mini sushi set",
      desc: "Mini-sushi set also depends on the number of rolls inside, on taste",
      price: "15.29",
      category: "delivery",
    },
    {
      id: 5,
      img: Images.Whisky1,
      title: "BOWMORE",
      desc: "15 year old single malt scotch whisky 750ml",
      price: "120.20",
      category: "drinks",
    },
    {
      id: 6,
      img: Images.Whisky2,
      title: "THE MACALLAN",
      desc: "12 year old double cask whisky 750ml",
      price: "130.20",
      category: "drinks",
    },
    {
      id: 7,
      img: Images.Whisky3,
      title: "TOKI",
      desc: "blended Japanese whisky 750ml",
      price: "64.20",
      category: "drinks",
    },
    {
      id: 8,
      img: Images.Whisky4,
      title: "LAPHROAIG QUARTER CASK",
      desc: "Islay single malt scotch whisky 750ml",
      price: "97.75",
      category: "drinks",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 justify-center items-center lg:justify-between">
      {products.map((data, index) => (
        <div
          key={data.id}
          className="bg-white p-8 rounded-md w-72 h-96 hover:-translate-y-4 transition ease-in-out delay-150"
        >
          <div className="flex justify-center">
            <img className="w-56 h-56" src={data.img} alt="product" />
          </div>
          <div className="flex justify-center text-center font-bigText uppercase text-md font-bold">
            <h3 className="tracking-wide">{data.title}</h3>
          </div>
          <div className="flex justify-center text-center font-miniText text-xs">
            <p className="tracking-wide w-40">{data.desc}</p>
          </div>
          <div className="mt-2 flex justify-center text-center font-miniText text-lg">
            <p className="tracking-wide w-40">${data.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuCard;
