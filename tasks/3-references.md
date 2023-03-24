# Ссылки

Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам. Эта функция принимает на вход две компании и возвращает `true`, если их структура одинаковая, и `false` в обратном случае. Проверка должна проходить по свойствам `name`, `state`, `website`.

```js
import is from '../solutions/3-references.js';
 
const company1 = { name: 'Google', state: 'moderating', website: 'https://google.com' };
const company2 = { name: 'Yandex', state: 'published', website: 'https://yandex.ru' };
is(company1, company2); // false
 
const company1 = { name: 'Yandex', state: 'published', website: 'https://yandex.ru' };
const company2 = { name: 'Yandex', state: 'published', website: 'https://yandex.ru' };
is(company1, company2); // true
```