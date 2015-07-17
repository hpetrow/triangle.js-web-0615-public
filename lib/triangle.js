'use strict';

function Triangle(s1, s2, s3){
  this.sides = [s1, s2, s3];

  if (this.noSize() || this.negativeSide() || this.inequality()) {
    throw new TriangleError();
  }
};

Triangle.prototype.kind = function() {
  var sorted = this.sides.sort();
  if (sorted[0] === sorted[2]) {
    return 'equilateral';
  }
  else if (sorted[0] === sorted[1] || sorted[1] === sorted[2]) {
    return 'isosceles';
  }
  else {
    return 'scalene';
  }
};

Triangle.prototype.noSize = function() {
  return this.sides[0] + this.sides[1] + this.sides[2] === 0;
}

Triangle.prototype.negativeSide = function() {
  return this.sides[0] < 0 || this.sides[1] < 0 || this.sides[2] < 0;
}

Triangle.prototype.inequality = function() {
  var sorted = this.sides.sort();
  return sorted[0] + sorted[1] <= sorted[2];
}

function TriangleError() {
  return this.message = "illegal triangle";
}
