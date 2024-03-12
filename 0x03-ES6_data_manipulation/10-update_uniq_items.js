/**
 * Updates the quantity of items in a map where initial quantity is 1 to 100.
 * @param {Map} map The map of items with their quantities
 * @throws {Error} If the argument is not a map
 */
function updateUniqueItems(map) {
  // Check if the argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  // Iterate over the entries of the map
  for (const [item, quantity] of map.entries()) {
    // If the quantity is 1, update it to 100
    const updatedQuantity = quantity === 1 ? 100 : quantity;
    updatedMap.set(item, updatedQuantity);
  }

  // Replace the original map with the updated one
  map.clear();
  updatedMap.forEach((value, key) => {
    map.set(key, value);
  });
}

export default updateUniqueItems;

