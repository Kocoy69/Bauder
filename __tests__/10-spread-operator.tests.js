import make from '../solutions/10-spread-operator.js';

it('make 1', () => {
  const company = make('Yandex');
  const now = Date.now();
  const expected = {
    name: 'Yandex',
    state: 'moderating',
    createdAt: expect.any(Number),
  };
  expect(company).toMatchObject(expected);
  expect(company.createdAt).toBeLessThanOrEqual(now);
});

it('make 2', () => {
  const company = make('Yandex', { website: 'yandex.ru', state: 'published' });
  const now = Date.now();
  const expected = {
    name: 'Yandex',
    state: 'published',
    createdAt: expect.any(Number),
    website: 'yandex.ru',
  };
  expect(company).toMatchObject(expected);
  expect(company).toMatchObject(expected);
  expect(company.createdAt).toBeLessThanOrEqual(now);
});
