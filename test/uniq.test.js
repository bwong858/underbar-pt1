const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups values of an object', () => {
    const basicPerson = {
      "likes to watch": "Game of Thrones",
      "favorite thing to do": "sleep",
      "likes to talk about": "Game of Thrones",
      "dreams about": "Game of Thrones",
      "takes pictures of": "food"
    };

    const interests = _.uniq(basicPerson);
    expect(interests).toEqual(["Game of Thrones", "sleep", "food"]);
  });

  it('unfortunately, uses some type coercion', () => {
    const basicValues = [1, true, '1'];
    expect(_.uniq(basicValues)).toEqual([1, true]);
  });
});
