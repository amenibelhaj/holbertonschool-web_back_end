import HolbertonCourse from './2-hbtn_course.js';

test('HolbertonCourse checks constructor types', () => {
  // Name must be a string
  expect(() => {
    new HolbertonCourse(10, 20, ["Lucie", "Guillaume"]);
  }).toThrow(TypeError);

  // Length must be a number
  expect(() => {
    new HolbertonCourse('PHP', '20', ["Lucie", "Guillaume"]);
  }).toThrow(TypeError);

  // Students must be an array of strings
  expect(() => {
    new HolbertonCourse('PHP', 20, ['Lucie', 42]);
  }).toThrow(TypeError);
});
