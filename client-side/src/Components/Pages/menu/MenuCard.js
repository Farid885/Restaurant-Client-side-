import React, { useEffect, useState } from "react";
import { Images } from "../../../assets/images/Images";
import { agent } from "../../Agent";
import Filter from "./Filter";
function MenuCard(props) {
  // Products data

  const [menuItem, setMenuItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [originalMenuItem, setOriginalMenuItem] = useState([]);
  useEffect(() => {
    getData();
    getDataofCategory();
  }, []);

  const getData = async () => {
    const res = await agent.Menu.All();
    setMenuItem(res);
    console.log(res);
    setOriginalMenuItem(res);
  };

  const getCategoryNameById = (categoryId) => {
    const categoryItem = category.find((cat) => cat.id === categoryId);
    return categoryItem ? categoryItem.name : "";
  };

  const getDataofCategory = async () => {
    const res = await agent.Categories.All();
    setCategory(res);
  };

  const handleCategoryClick = (categoryId) => {
    const filteredMenuItems = originalMenuItem.filter((item) => item.category_id === categoryId);
    setMenuItem(filteredMenuItems);
  };

  return (
    <div className="">
      <div className="flex flex-wrap justify-between py-4 anim in-up">
        {category.map((data, index) => (
          <ul key={index.id} className="text-secondaryText font-bigText text-xl uppercase">
            <li
              onClick={() => {
                handleCategoryClick(data.id);
              }}
              className="under cursor-pointer hover:italic"
            >
              {data.name}
            </li>
          </ul>
        ))}
      </div>

      <div className="flex  mt-10 flex-wrap gap-8 justify-center items-center">
        {menuItem.map((data, index) => (
          <div
            key={data.id}
            className="bg-white p-8 rounded-md w-72 h-96 hover:-translate-y-4 transition ease-in-out delay-150"
          >
            <div className="flex justify-center">
              <img className="w-56 h-56" src={data.image} style={{ objectFit: "cover" }} alt="product" />
            </div>
            <div className="flex justify-center text-center font-bigText uppercase text-md font-bold">
              <h3 className="tracking-wide">{data.name}</h3>
            </div>

            <div className="flex justify-center text-center font-miniText text-xs">
              <p className="tracking-wide w-40">{getCategoryNameById(data.category_id)}</p>
            </div>

            <div className="mt-2 flex justify-center text-center font-miniText text-lg">
              <p className="tracking-wide w-40">${data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCard;
