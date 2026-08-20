function counter() {
  let count = 0;

  function increment() {
    count++;
  }

  return count;
}

const result = counter();

console.log(result);