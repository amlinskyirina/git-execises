test('the letter e appears twice in shecodes', (t) => {
  const word = 'shecodes';
  const numberOfE = word.split('e').length - 1;

  assert.strictEqual(numberOfE, 2);
});

test('an empty array has length zero', (t) => {
  const emptyArray = [];

  assert.strictEqual(emptyArray.length, 0);
});

test('numbers from zero to ten do not contain null', (t) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  assert.strictEqual(numbers.includes(null), false);
});

test('the letter e appears twice in shecodes', (t) => {
  const word = 'shecodes';
  const numberOfE = word.split('e').length - 1;

  assert.strictEqual(numberOfE, 2);
});

test('an empty array has length zero', (t) => {
  const emptyArray = [];

  assert.strictEqual(emptyArray.length, 0);
});

test('numbers from zero to ten do not contain null', (t) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  assert.strictEqual(numbers.includes(null), false);
});
