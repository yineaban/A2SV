const dist = (point) => {
  return point[0] * point[0] + point[1] * point[1];
}

var kClosest = function(points, k) {
  const n = points.length;
  let map = [];

  for (let i = 0; i < n; ++i) {
    map.push({
      distance: dist(points[i]),
      points: points[i]
    })
  }
  map.sort((a, b) => a.distance - b.distance);
    
  let ans = [];
  for (let j = 0; j < k; j++) {
      ans.push(map[j].points)
  }
  return k === n ? points : ans
};
