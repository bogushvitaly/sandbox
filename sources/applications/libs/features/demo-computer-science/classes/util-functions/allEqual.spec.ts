import { allEqual } from './allEqual';

test('anagrams', () => {
  expect(allEqual([1, 2, 3, 4, 5, 6])).toBeTruthy();
  expect(allEqual([1, 1, 1, 1])).toBeTruthy();
});
