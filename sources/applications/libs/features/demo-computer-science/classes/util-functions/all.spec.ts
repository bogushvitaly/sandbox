import { all } from './all';

test('all', () => {
  expect(all([4, 2, 3], x => x > 1)).toBeTruthy();
  expect(all([1, 2, 3])).toBeTruthy();
});
