import React from "react";

function Filter() {
  const filter = [
    {
      id: 1,
      menuName: "all menu",
    },
    {
      id: 2,
      menuName: "delivery menu",
    },
    {
      id: 3,
      menuName: "dining menu",
    },
    {
      id: 4,
      menuName: "drink menu",
    },
    {
      id: 5,
      menuName: "happy menu",
    },
    {
      id: 6,
      menuName: "dessert menu",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between py-4 anim in-up">
      {filter.map((data, index) => (
        <ul
          key={data.id}
          className="text-secondaryText font-bigText text-xl uppercase"
        >
          <li className="under cursor-pointer hover:italic">{data.menuName}</li>
        </ul>
      ))}
    </div>
  );
}

export default Filter;
