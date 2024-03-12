import updateUniqueItems from './10-update_uniq_items';
import groceriesList from './9-groceries_list';

describe('updateUniqueItems', () => {
  let map;

  beforeEach(() => {
    // Reset the map before each test case
    map = groceriesList();
  });

  test('should update the quantity of items with initial quantity at 1 to 100', () => {
    // Log the initial map
    console.log('Initial map:', map);

    // Call the function to be tested
    updateUniqueItems(map);

    // Log the map after updating items
    console.log('Updated map:', map);

    // Assert statements can be added here
  });
});

