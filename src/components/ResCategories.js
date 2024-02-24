import React from 'react'
import ItemCard from './ItemCard';

const ResCategories = ({ data, showIndex, setshowIndex, showless }) => {
  const handleclick = (index) => {
    if (showIndex == index) {
      return setshowIndex(null);
    }
    setshowIndex();
  };

  const toggleShow = (showless) => {
    return !showless;
  };
  
  return (
    <>
      <div className=" w-6/12 mx-auto  ">
        <div
          className="bg-gray-100 flex justify-between  shadow-lg border-b-2 p-4 m-4"
          onClick={handleclick}
        >
          <span className="font-semibold text-lg">
            {data.title}
          </span>
          <span>🔽</span>
        </div>
        <div className="px-4">
          {showless && <ItemCard item={data.itemCards} />}
        </div>
      </div>
    </>
  );
};
export default ResCategories;