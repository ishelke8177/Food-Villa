import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { IMG_URL } from '../data/constants';
import Shimmer from './Shimmer';
import useRestaurant from '../hooks/useRestaurant';
import ResCategories from './ResCategories';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setshowIndex] = useState(-1);
  const {restaurant, restaurantCategories} = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
    <nav className="pl-[23.5%] text-xl m-6 flex justify-between ">

      <div>
        <h2 className="font-bold">{restaurant?.name}</h2>
        <img src={IMG_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <div className=" pr-[355px]">⭐{restaurant?.avgRating} stars</div>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>
    </nav>
      <div>
      {restaurantCategories.map((Categories, index) => (
        <ResCategories
          key={Categories?.card?.card?.title}
          data={Categories?.card?.card}
          showless={index == showIndex && true}
          setshowIndex={() => setshowIndex(index)}
          showIndex={index == showIndex}
        />
      ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
