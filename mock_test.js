const assert = require('node:assert');
const { test, mock } = require('node:test');

const objectToTest = {
  fetch() {
    return [1, 2, 3];
  },

  decorateFetchedList() {
    const input = this.fetch();
    return input.map((x) => '*' + x + '*');
  }
};

test('testing with a mock', (t) => {
  const fakeInput = ['a', 'b', 'c'];

  const proxy = mock.method(objectToTest, 'fetch');

  proxy.mock.mockImplementation(() => {
    return fakeInput;
  });

  const returnValue = objectToTest.decorateFetchedList();

  assert.strictEqual(returnValue[0], '*a*');
});

