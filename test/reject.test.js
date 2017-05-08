const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('rejects filled values from an object if supplied a callback checking for them', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const nulls = _.reject(order, (value) => value);
    expect(nulls).toEqual([null, null]);
  });

  it('rejects any filled values if not supplied a callback', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: '',
      drink: null,
      dessert: 'cookie'
    };
    expect(_.reject(order)).toEqual([null, '', null]);
  });
});
