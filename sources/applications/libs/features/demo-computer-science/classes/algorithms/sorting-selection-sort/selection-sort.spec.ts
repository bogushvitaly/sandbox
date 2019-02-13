import { selectionSort } from './selection-sort';

test('selection concept 1', () => {
  expect(selectionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test('selection concept 2', () => {
  expect(selectionSort([3, 2, 1, 4])).toEqual([1, 2, 3, 4]);
});
