# Объекты в действии

Реализуйте и экспортируйте по умолчанию функцию `getDomainInfo()`, которая принимает на вход имя сайта и возвращает информацию о нем:

```js
import getDomainInfo from '../solutions/4-using.js';
 
// Если домен передан без указания протокола,
// то по умолчанию берется http
getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }
 
getDomainInfo('https://yandex.ru');
// {
//   scheme: 'https',
//   name: 'yandex.ru',
// }
 
getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// }
```

## Подсказки

- [startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
- [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Совершенный код: нормализация данных](https://ru.hexlet.io/blog/posts/sovershennyy-kod-normalizatsiya-dannyh)