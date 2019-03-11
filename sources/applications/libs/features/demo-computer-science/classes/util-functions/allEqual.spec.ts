import { allEqual } from './allEqual';

test('allEqual', () => {
  expect(allEqual([1, 2, 3, 4, 5, 6])).toBeFalsy();
  expect(allEqual([1, 1, 1, 1])).toBeTruthy();
});
