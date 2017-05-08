const _ = require('../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([5, 7, 11]);
  });

  it('filters an object to only numeric values', () => {
    const characterAttributes = {
      name: 'Thokul Mongothsbeard',
      honorific: 'Lord Thokul Mongothsbeard the Arcane',
      race: 'human',
      class: 'druid',
      strength: 4,
      constitution: 7,
      dexterity: 10,
      intelligence: 16,
      wisdom: 5,
      charisma: 4
    };

    const abilityScores = _.filter(characterAttributes, (value) => !isNaN(value));
    expect(abilityScores).toEqual([4, 7, 10, 16, 5, 4]);
  });

  it('filters an object to only existent values', () => {
    const characterAttributes = {
      name: 'Someone',
      honorific: '',
      race: 'human',
      class: 'druid',
      strength: undefined,
      constitution: 10,
      dexterity: 10,
      intelligence: 16,
      wisdom: 5,
      charisma: undefined
    };

    const abilityScores = _.filter(characterAttributes, (value) => value);
    expect(abilityScores).toEqual(['Someone', 'human', 'druid', 10, 10, 16, 5]);
  });

  it('returns the same array if no callback is supplied', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.filter(nums)).toEqual([2, 4, 5, 6, 7, 8, 10, 11]);
  });

  it('returns the same object if no callback is supplied', () => {
    const characterAttributes = {
      name: 'Thokul Mongothsbeard',
      wisdom: 5,
      charisma: 4
    };
    expect(_.filter(characterAttributes)).toEqual(['Thokul Mongothsbeard', 5, 4]);
  });
});
