export default (list, item) => {
  let low = 0;
  let high = list.lenght - 1;

  while (low <= high) {
    const mid = Math.round((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};
