const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns an empty array if you ask for negative elements', () => {
    expect(_.last(['a', 'b', 'c'], -3)).toEqual([]);
  });

  it('returns an empty array if you ask for any number of elements from an empty array', () => {
    expect(_.last([], 3)).toEqual([]);
    expect(_.last([], -2)).toEqual([]);
  });
});
