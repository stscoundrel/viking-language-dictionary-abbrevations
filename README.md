# Viking Language Dictionary Abbreviations

Map abbreviations to full length words from "Viking Language" dictionary.

As with most dictionaries, "Viking Language" saves space in print by using various abbreviations. While working with online versions of the same source material, there is little use for these abbreviations. This library helps you map them back to their full length equilevants.

Related projects:
- [Viking Language Dictionary](https://github.com/stscoundrel/viking-language-dictionary).

### Install

`yarn add viking-language-dictionary-abbreviations`


##### Usage

Find abbreviations from text content:

```javascript
import { findAbbreviations }  from 'viking-language-dictionary-abbreviations'

// Example content from dictionary, from definition of 'alla'
const content = 'str m acc pl, f acc sg; wk m acc/dat/gen sg, f acc sg, n all sg of allr';

// Returns map of abbreviations to meanings.
const result = findAbbreviations(content);

console.log(result);
// acc => accusative
// dat => dative
// f   => feminine
// gen => genitive
// m   => masculine
// n   => neuter
// pl  => plural
// sg  => singular
// str => strong (adj or verb)
// wk  => weak (adjective or verb)

```


### About "Viking Language"

"Viking Language" is a book series by [Jesse L. Byock](http://www.viking.ucla.edu/), which teaches basics of Old Norse language. The books are accompanied by a small dictionary at the end, providing learners a place to look for translations of the books passages.

These abbreviations are sourced from a [blog post](https://oldnorse.org/wp-content/uploads/2020/09/AbbbreviationList.pdf) by the books publisher, [Jules William Press](https://juleswilliampress.com/).
