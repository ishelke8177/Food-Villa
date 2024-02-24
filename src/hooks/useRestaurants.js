import { useEffect, useState } from 'react';
import { FETCH_RESTAURANTS_URL } from '../data/constants';

const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANTS_URL);

    data
      .json()
      .then((data) => {
        setAllRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      })
      .catch((err) => console.log(err));
  }

  return {allRestaurants, setfilteredRestaurants, filteredRestaurants};
};

export default useRestaurants;
