import {ParseError, parseJson}  from '../solutions/11-exceptions.js';

test('testing parse json', () => {
  const json = '{ "key": "value" }';
  expect(parseJson(json)).toEqual({ key: 'value' });
});

test('testing parse invalid json', () => {
  const json = '{ key": "value" }';
  expect(() => parseJson(json)).toThrow(ParseError);
});