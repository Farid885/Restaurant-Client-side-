// import React from "react";
// import { agent } from "../../Agent";
// import { useState,useEffect } from "react";
// import MenuCard from "./MenuCard";
// function Filter() {
//   // const filter = [
//   //   {
//   //     id: 1,
//   //     menuName: "all menu",
//   //   },
//   //   {
//   //     id: 2,
//   //     menuName: "delivery menu",
//   //   },
//   //   {
//   //     id: 3,
//   //     menuName: "dining menu",
//   //   },
//   //   {
//   //     id: 4,
//   //     menuName: "drink menu",
//   //   },
//   //   {
//   //     id: 5,
//   //     menuName: "happy menu",
//   //   },
//   //   {
//   //     id: 6,
//   //     menuName: "dessert menu",
//   //   },
//   // ];
//   const [categoryOf,setCategoryOf]= useState([])
// const [menu,setMenu] = useState([])
//   useEffect(()=>{
//    getDataofCate()
//    getDataofMenu()
    
//   },[])

  
//   const getDataofCate = async () => {
//     try {
//       const res = await agent.Categories.All();
//       setCategoryOf(res);
//     } catch (error) {
//       console.error("Kategorileri getirirken hata oluştu:", error);
//     }
//   };

//   const getDataofMenu =async ()=>{
//     const res  = await agent.Menu.All()
   
//     setMenu(res)
    
//   }


//   const getCategoryNameById = (categoryId) => {
//     const categoryItem = categoryOf.find((cat) => cat.id === categoryId);
    
//     return categoryItem ? categoryItem.name : "";

//   };

//   return (
//     <div className="flex flex-wrap justify-between py-4 anim in-up">
//       {categoryOf.map((data, index) => (
//         <ul
//           key={index.id}
//           className="text-secondaryText font-bigText text-xl uppercase"
//         >
//           <li  onClick={()=>{
            
//             getCategoryNameById(menu.category_id)
//           {console.log(getCategoryNameById());}
//           }} className="under cursor-pointer hover:italic">{data.name}</li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// export default Filter;
