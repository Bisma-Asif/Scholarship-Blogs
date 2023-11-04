"use client";
import { useState } from "react";
import style from "./filter.css";

function PopupFilter({ visible, onClose, onFilterChange }) {
  const PopupOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const [isChecked, setIsChecked] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (item) => {
    if (selectedFilters.includes(item)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== item));
    } else {
      setSelectedFilters([...selectedFilters, item]);
    }
  };

  const [timedPopup, setTimedPopup] = useState(false);

  const filterData = [
    {
      title: "Bachelor",
      items: ["Mathematics", "Management", "Business", "Computer"],
    },
    {
      title: "Masters",
      items: ["Mathematics", "Management", "Business", "Computer", "Medical"],
    },
    {
      title: "Online Scholarships",
      items: ["Mathematics", "Medical", "Business"],
    },
  ];

  if (!visible) return null;

  return (
    <>
      {/* component */}
      {/* Container */}
      <div
        id="container"
        onClick={PopupOnClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        style={{ zIndex: 999 }}
      >
        <div className="modal">
          <button onClick={onClose} className="close">
            <svg fill="none" viewBox="0 0 15 15" height="3em" width="3em">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M.877 7.5a6.623 6.623 0 1113.246 0 6.623 6.623 0 01-13.246 0zM7.5 1.827a5.673 5.673 0 100 11.346 5.673 5.673 0 000-11.346zm2.354 3.32a.5.5 0 010 .707L8.207 7.5l1.647 1.646a.5.5 0 01-.708.708L7.5 8.207 5.854 9.854a.5.5 0 01-.708-.708L6.793 7.5 5.146 5.854a.5.5 0 01.708-.708L7.5 6.793l1.646-1.647a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <footer className="filter">
            <div className="container">
              <div className="row">
                {filterData.map((column, index) => (
                  <div key={index} className="filter-col">
                    <h4>{column.title}</h4>
                    <button>
                      {column.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2 rounded-2xl"
                            checked={selectedFilters.includes(item)}
                            onChange={() => handleCheckboxChange(item)}
                          />
                          <a href="#">{item}</a>
                        </div>
                      ))}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default PopupFilter;

// "use client";
// import { useState } from "react";
// import style from "./filter.css";

// function PopupFilter({ visible, onClose }) {
//   const PopupOnClose = (e) => {
//     if (e.target.id === "container") onClose();
//   };
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const [timedPopup, setTimedPopup] = useState(false);

//   const filterData = [
//     {
//       title: "Bachelor",
//       items: ["Mathematics", "Management", "Business", "Computer"],
//     },
//     {
//       title: "Masters",
//       items: ["Mathematics", "Management", "Business", "Computer", "Medical"],
//     },
//     {
//       title: "Online Scholarships",
//       items: ["Mathematics", "Medical", "Business"],
//     },
//   ];

//   if (!visible) return null;

//   // useEffect(() => {
//   //   filterItems();
//   // },[selectedFilter]);

//   // const Bachelor Mathematics = () => {
//   //   if (selectedFilter.length > 0) {
//   //     let tempItems = selectedFilter.map((selectedCategory) =>{
//   //       let temp = items.filter((items) =>item.selectedCategory === selectedCategory)
//   //       return temp;
//   //     });
//   //     setFilteredItems(temItems.flat())
//   //   }

//   //   else{

//   //   }
//   // }
//   return (
//     <>
//       {/* component */}
//       {/* Container */}
//       <div
//         id="container"
//         onClick={PopupOnClose}
//         className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
//         style={{ zIndex: 999 }}
//       >
//         <div className="modal">
//           <button onClick={onClose} className="close">
//             <svg fill="none" viewBox="0 0 15 15" height="3em" width="3em">
//               <path
//                 fill="currentColor"
//                 fillRule="evenodd"
//                 d="M.877 7.5a6.623 6.623 0 1113.246 0 6.623 6.623 0 01-13.246 0zM7.5 1.827a5.673 5.673 0 100 11.346 5.673 5.673 0 000-11.346zm2.354 3.32a.5.5 0 010 .707L8.207 7.5l1.647 1.646a.5.5 0 01-.708.708L7.5 8.207 5.854 9.854a.5.5 0 01-.708-.708L6.793 7.5 5.146 5.854a.5.5 0 01.708-.708L7.5 6.793l1.646-1.647a.5.5 0 01.708 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//           <footer className="filter">
//             <div className="container">
//               <div className="row">
//                 {filterData.map((column, index) => (
//                   <div key={index} className="filter-col">
//                     <h4>{column.title}</h4>
//                     <button>
//                       {column.items.map((item, itemIndex) => (
//                         <div key={itemIndex} className="flex items-center">
//                           <input type="checkbox" className="mr-2 rounded-2xl" />
//                           <a href="#">{item}</a>
//                         </div>
//                       ))}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PopupFilter;
