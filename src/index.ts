import { getAbbreviationMapping } from './mappings/abbreviation-mapping';

export type StringToStringMap = Map<string, string>;

export const findFromMapping = (
  content: string,
  abbreviations: StringToStringMap,
) : StringToStringMap => {
  const result: StringToStringMap = new Map();

  abbreviations.forEach((value, key) => {
    // Case sensitive on purpose -> some abbrs should only catch upper cases.
    if (content.includes(key)) {
      result.set(key, value);
    }
  });

  return result;
};

export const findAbbreviations = (content: string) : StringToStringMap => {
  const abbrMap = getAbbreviationMapping();
  return findFromMapping(content, abbrMap);
};
export default {
  getAbbreviationMapping,
  findAbbreviations,
};
