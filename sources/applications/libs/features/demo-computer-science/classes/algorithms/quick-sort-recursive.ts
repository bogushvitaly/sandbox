const random = <T>(list: T[]) => list[Math.floor(Math.random() * list.length)];

export default function quickSort<T>(list: T[]): T[] {
  if (list.length < 2) {
    return list;
  }

  const pivot = random(list);
  const less = list.filter(i => i < pivot);
  const greater = list.filter(i => i > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
}
