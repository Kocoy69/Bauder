// BEGIN
export function Point(x, y) {
    this.x = x;
    this.y = y;
    this.getY = function() { return this.y; };
    this.getX = function() { return this.x; };
}

export function Segment(point1, point2) {
    this.beginPoint = point1;
    this.endPoint = point2;
    this.getBeginPoint = function() { return this.beginPoint; };
    this.getEndPoint = function() { return this.endPoint; };
}

export function reverse(segment) {
    return new Segment(segment.getEndPoint(), segment.getBeginPoint());
}
export default { Segment, Point, reverse };
// END