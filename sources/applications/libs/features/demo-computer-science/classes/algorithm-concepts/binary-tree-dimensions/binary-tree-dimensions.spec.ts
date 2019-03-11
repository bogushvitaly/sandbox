import { maxHeight, maxItems } from './binary-tree-dimensions';

test('balancedBinaryTree', () => {
  const height = 100;
  expect(maxHeight(maxItems(height))).toBe(height);
});
