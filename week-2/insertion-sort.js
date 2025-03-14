const array = [5, 1, 8, 9, 12];

console.log(array);

for (i = 1; i < array.length; i++) {
  let current = array[i];
  let j = i - 1;

  while (j >= 0 && array[j] > current) {
    array[j + 1] = array[j];
    j--;
  }

  array[j + 1] = current;
  i = i + 1;
}
console.log(array);
