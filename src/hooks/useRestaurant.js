import { useEffect, useState } from 'react';
import { menuList } from '../data/constants';

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantCategories, setRestaurantCategories] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // async function getRestaurantInfo() {
  //   const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6161&lng=73.7286&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);

  //   data.json().then((data) => {
  //     setRestaurant(data?.data?.cards[0]?.card?.card?.info);
  //     setRestaurantCategories(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  //   }).catch(error => console.log(error));
  // }

  function getRestaurantInfo(){
    const data = menuList;
    setRestaurant(data?.data?.cards[2]?.card?.card?.info);
    setRestaurantCategories(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  }

  return {restaurant, restaurantCategories};
};

export default useRestaurant;
