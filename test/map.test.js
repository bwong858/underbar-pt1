_ = require('../underbar');

describe('map()', () => {
  it('maps every number in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every element in an array to a Boolean', () => {
    const arr = [1, 2, 'three', 4, 5];
    const mappedArr = _.map(arr, (el) => Number.isInteger(el));
    expect(mappedArr).toEqual([true, true, false, true, true]);
  });

  it('does not mutate the original array', () => {
    const arr = [1, 2, 'three', 4, 5];
    const mappedArr = _.map(arr, (el) => Number.isInteger(el));
    expect(arr).toEqual([1, 2, 'three', 4, 5]);
  });

});
