# Исключения

Реализуйте и экспортируйте функцию-обёртку `parseJson()` для функции `JSON.parse()`, которая работает как встроенная. Но в случае если в функцию была передана некорректная JSON-строка, функция должна выбросить исключение `ParseError`. Класс `ParseError` реализовывать не нужно, он уже импортирован.

## Пример

```js
const json = '{ "key": "value" }';
parseJson(json); // { key: 'value' }
 
const incorrectJson = '{ key": "value" }';
parseJson(incorrectJson); // => ParseError: Invalid JSON string
```

## Подсказки

- [JSON.parse()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)