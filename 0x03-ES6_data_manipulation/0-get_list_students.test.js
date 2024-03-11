const getListStudents = require("./0-get_list_students");

describe("getListStudents", () => {
  it("returns an array of objects with the correct attributes", () => {
    const students = getListStudents();
    expect(students).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);
  });
});
