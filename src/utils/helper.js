export function filterData(searchInput, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.info?.name?.toLowerCase().includes(searchInput);
  });

  return filteredData;
}
