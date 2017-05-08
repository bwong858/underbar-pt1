const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns the first (array.length - x) elements of an array if you ask for -x elements', () => {
    expect(_.first(['a', 'b', 'c'], -1)).toEqual(['a', 'b']);
  });

  it('returns an empty array if you ask for any number of elements from an empty array', () => {
    expect(_.first([], 3)).toEqual([]);
    expect(_.first([], -2)).toEqual([]);
  });
});
