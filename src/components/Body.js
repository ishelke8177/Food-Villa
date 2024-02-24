import { useState } from 'react';
import { filterData } from '../utils/helper';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [searchInput, setSearchInput] = useState('');
  const {allRestaurants, setfilteredRestaurants, filteredRestaurants} = useRestaurants();

  // early return
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-1 bg-pink-50 my-5">
        <input
          type="text"
          className="p-2 m-2 rounded-lg"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="p-2 m-5 bg-violet-800 text-white rounded-xl"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredRestaurants?.length === 0 ? (
          <h3>No Restaurants found...</h3>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant?.info?.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
