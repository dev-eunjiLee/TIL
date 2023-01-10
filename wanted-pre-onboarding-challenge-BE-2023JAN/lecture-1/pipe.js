/**
 * 원티드 프리온보딩 챌린지 백엔드 1일차 - 2
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forEach = (func, iter) => {
  for (const el of iter) {
    func(el);
  }
  return iter;
};

const map = (func, iter) => {
  const result = [];
  for (const el of iter) {
    result.push(func(el));
  }
  return result;
};

const filter = (func, iter) => {
  const result = [];
  for (const el of iter) {
    if (func(el)) result.push(el);
  }
  return result;
};

const reduce = (func, acc, iter) => {
  if (iter === undefined) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const el of iter) {
    acc = func(acc, el);
  }
  return acc;
};

/**
 * pipe: 함수의 합성
 * 순회 가능한 객체를 받아서 함수의 파이프라인을 타고 최종 결과값을 리턴한다.
 */

const pipe = (iter, ...functions) => {
  return reduce((prev, func) => func(prev), iter, functions);
};

pipe(
  arr,
  (arr) => filter((per) => per > 5, arr),
  (arr) => map((per) => per * 3, arr)
);

console.log(arr);
