import is from '../solutions/3-references.js';

it('empty objects', () => {
  const company1 = {};
  const company2 = {};
  expect(is(company1, company2)).toBe(true);
});

it('different names', () => {
  const company1 = { name: 'Yandex' };
  const company2 = { name: 'Google' };
  expect(is(company1, company2)).toBe(false);
});

it('same name', () => {
  const company1 = { name: 'Yandex' };
  const company2 = { name: 'Yandex' };
  expect(is(company1, company2)).toBe(true);
});

it('different states', () => {
  const company1 = {
    name: 'Yandex',
    state: 'published',
    website: 'https://yandex.ru',
  };
  const company2 = {
    name: 'Yandex',
    state: 'draft',
    website: 'https://yandex.ru',
  };
  expect(is(company1, company2)).toBe(false);
});

it('different sites', () => {
  const company1 = {
    name: 'Yandex',
    state: 'published',
    website: 'https://yandex.ru',
  };
  const company2 = {
    name: 'Yandex',
    state: 'published',
    website: 'https://google.com',
  };
  expect(is(company1, company2)).toBe(false);
});

it('same everything', () => {
  const company1 = {
    name: 'Yandex',
    state: 'published',
    website: 'https://yandex.ru',
  };
  const company2 = {
    name: 'Yandex',
    website: 'https://yandex.ru',
    state: 'published',
  };
  expect(is(company1, company2)).toBe(true);
});
