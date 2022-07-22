import abbreviations from '../src';

describe('Abbreviation mapping tests', () => {
  test('Abbreviations in map have expected content', () => {
    const resultMap = abbreviations.getAbbreviationMapping();

    const allAbbreviations = Array.from(resultMap.keys()).map((abbr) => `${abbr} - ${resultMap.get(abbr)}`).join(' ');
    const expectedFullLenghts = '= - equals ~  - alternative spelling 1dual - 1st person dual 1pl - 1st person plural 1sg - 1st person singular 2dual - 2nd person dual 2pl - 2nd person plural 2sg - 2nd person singular 3pl - 3rd person plural 3sg - 3rd person singular acc - accusative adj - adjective adv - adverb art - article (def) aux - auxiliary (verb) comp - comparative (adj or adv) conj - conjunction conjug - conjugation dat - dative def - definite (art) defect - defective dem - demonstrative (pron) e-m - einhverjum, einhverju ‘for somebody, something,’ dative e-n - einhvern, eitthvat ‘somebody, something’ accusative e-s - einhvers ‘of somebody or something,’ genetive) e-t - einhvern, eitthvat ‘somebody, something’ accusative e-u - einhverjum, einhverju ‘for somebody, something,’ dative Eng - English esp - especially etc - et cetera ex - example f  - feminine fig - figurative gen - genitive imp - imperative impers - impersonal (verb) indecl - indeclinable indef - indefinite (pron) indic - indicative inf - infinitive interrog - interrogative (adv or pron) intrans - intransitive (verb) leg - legal usage lit - literally m  - masculine MI - Modern Icelandic mid - middle voice n  - neuter neg - negative neg suff - negative suffix nom - nominative num - number obj - object OE - Old English OI - Old Icelandic ON - Old Norse ord  - ordinal (num) part - particle pers  - personal pl - plural poet - poetical usage poss - possessive (pron) ppart - past participle pref - prefix prep - preposition pres par - t present participle pres - present pret-pres - preterite-present (verb) pron - pronoun refl - reflexive (verb or pron) rel - relative (pron or particle) sb - somebody sg - singular sth - something str - strong (adj or verb) subj - subject subjunct - subjunctive suff - suffix superl - superlative (adj or adv) trans - transitive (verb) transl - translation usu - usually var - variant vb - verb w  - with wk - weak (adjective or verb)';

    expect(allAbbreviations).toEqual(expectedFullLenghts);
  });
});
