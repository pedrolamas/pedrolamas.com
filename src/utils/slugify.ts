// Port of underscore.string's slugify; must stay byte-compatible

const diacriticsFrom = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž';
const diacriticsTo = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';

const from = diacriticsFrom + diacriticsFrom.toUpperCase() + 'ß';
const to = [...diacriticsTo, ...diacriticsTo.toUpperCase(), 'ss'];

const cleanDiacritics = (value: string): string =>
  value.replace(/.{1}/g, (c) => {
    const index = from.indexOf(c);
    return index === -1 ? c : to[index];
  });

export const slugify = (value: string): string =>
  cleanDiacritics(value)
    .replace(/[^\w\s-]/g, '-')
    .toLowerCase()
    .trim()
    .replace(/[-_\s]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const slug = (value: string): string => slugify(value.replace(/\./g, 'dot'));
