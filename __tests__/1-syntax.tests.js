import fs from 'fs';
import getJsonFileData from '../solutions/1-syntax.js';

it('Проверка фкункции getJsonFileData()', () => {
  const actual = getJsonFileData();
  const fileContent = fs.readFileSync('./tasks/example.json', 'utf8');
  const expected = JSON.parse(fileContent);
  expect(actual).toEqual(expected);
});
