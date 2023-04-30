import {Segment, Point} from '../solutions/8-to-string.js'

test('testing toString point', () => {
  const point1 = new Point(1, 10);
  const point2 = new Point(11, -3);
  expect(`${point1}`).toBe('(1, 10)');
  expect(`${point2}`).toBe('(11, -3)');
});

test('testing toString segment', () => {
  const point1 = new Point(1, 10);
  const point2 = new Point(11, -3);
  const segment1 = new Segment(point1, point2);
  expect(`${segment1}`).toBe('[(1, 10), (11, -3)]');

  const segment2 = new Segment(point2, point1);
  expect(`${segment2}`).toBe('[(11, -3), (1, 10)]');
});
