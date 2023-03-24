import getDomainInfo from '../solutions/4-using.js';

it('Проверка функции getDomainInfo()', () => {
  const expected1 = {
    scheme: 'http',
    name: 'yandex.ru',
  };
  expect(getDomainInfo('yandex.ru')).toEqual(expected1);

  const expected2 = {
    scheme: 'https',
    name: 'google.com',
  };
  expect(getDomainInfo('https://google.com')).toEqual(expected2);

  const expected3 = {
    scheme: 'http',
    name: 'google.com',
  };
  expect(getDomainInfo('http://google.com')).toEqual(expected3);
});
