#  toString()

Реализуйте метод `toString()`, который преобразует точку к строке в соответствии с примером ниже (1, 10):

```js
const point1 = new Point(1, 10);
 
console.log(point1.toString()); // => (1, 10)
```

Реализуйте метод `toString()`, который преобразует отрезок к строке в соответствии с примером ниже:

```js
const point1 = new Point(1, 10);
const point2 = new Point(11, -3);
const segment1 = new Segment(point1, point2);
console.log(segment1.toString()); // => [(1, 10), (11, -3)]
 
const segment2 = new Segment(point2, point1);
console.log(segment2.toString()); // => [(11, -3), (1, 10)]
```