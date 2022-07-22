import { findAbbreviations } from '../src';

describe('Abbreviation finder', () => {
  test('Finds abbreviations in content: alla', () => {
    // From definition of 'alla'
    const content = 'str m acc pl, f acc sg; wk m acc/dat/gen sg, f acc sg, n all sg of allr';

    const expected = new Map();
    expected.set('acc', 'accusative');
    expected.set('dat', 'dative');
    expected.set('f ', 'feminine');
    expected.set('gen', 'genitive');
    expected.set('m ', 'masculine');
    expected.set('n ', 'neuter');
    expected.set('pl', 'plural');
    expected.set('sg', 'singular');
    expected.set('str', 'strong (adj or verb)');
    expected.set('wk', 'weak (adjective or verb)');

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });

  test('Finds abbreviations in content: skyr', () => {
    // From definition of 'skyr'
    const content = 'n curdled milk';

    const expected = new Map();
    expected.set('n ', 'neuter');

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });
});
