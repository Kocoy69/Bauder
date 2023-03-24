# Клонирование

Реализуйте и экспортируйте по умолчанию функцию, которая выполняет поверхностное копирование объектов.

```js
import cloneShallow from '../solutions/9-cloning.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};
 
// result имеет такую же структуру, как и data
const result = cloneShallow(data);
```
Реализуйте этот функционал самостоятельно, не используя функцию `Object.assign()`.

## Подсказки

- Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект.