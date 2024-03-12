/* eslint-disable jest/prefer-expect-assertions */

import updateUniqueItems from './10-update_uniq_items';
import groceriesList from './9-groceries_list';

describe('updateUniqueItems', () => {
  it('should update the quantity of items with initial quantity at 1 to 100', () => {
    const map = groceriesList();
    updateUniqueItems(map);

    // Check if the quantities of 'Pasta' and 'Rice' are updated to 100
    expect(map.get('Pasta')).toBe(100);
    expect(map.get('Rice')).toBe(100);

    // Check if the quantities of other items remain unchanged
    expect(map.get('Milk')).toBe(2); // Assuming Milk's initial quantity is 2
    expect(map.get('Eggs')).toBe(6); // Assuming Eggs' initial quantity is 6
  });

  it('should throw an error if the argument is not a map', () => {
    // Test with a non-map argument
    expect(() => {
      updateUniqueItems('not a map');
    }).toThrow('Cannot process');

    // Test with null argument
    expect(() => {
      updateUniqueItems(null);
    }).toThrow('Cannot process');
  });
});

