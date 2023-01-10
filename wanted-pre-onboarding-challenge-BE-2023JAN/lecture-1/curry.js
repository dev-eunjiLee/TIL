/**
 * 원티드 프리온보딩 챌린지 백엔드 1일차 - 3
 */

/**
 * 커링: 함수의 평가 시점 미루기
 */

const curry = (func) => {
  return (a, ...args) => {
    return args.length > 0 ? func(a, ...args) : (...args) => func(a, ...args);
  };
};

const add = (a, b) => a + b;
// console.log(add(3, 4));
// console.log(add(3));

const curryAdd = curry(add);
// console.log(curryAdd(3, 4));
// console.log(curryAdd(3));
// console.log(curryAdd(3)(5));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forEach = (func, iter) => {
  for (const el of iter) {
    func(el);
  }
  return iter;
};

const map = curry((func, iter) => {
  const result = [];
  for (const el of iter) {
    result.push(func(el));
  }
  return result;
});

const filter = curry((func, iter) => {
  const result = [];
  for (const el of iter) {
    if (func(el)) result.push(el);
  }
  return result;
});

const reduce = curry((func, acc, iter) => {
  if (iter === undefined) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const el of iter) {
    acc = func(acc, el);
  }
  return acc;
});

const pipe = (iter, ...functions) => {
  return reduce((prev, func) => func(prev), iter, functions);
};

/**
 * reduceCurry
 * ==>
 * curry(reduce)
 * ==>
 * (a, ...args) => {
 *     return args.length > 0 ? reduce(a, ...args) : (...args) => reduce(a, ...args)
 * }
 *
 * reduceCurry((prev, func) => func(prev), iter, functions))
 * ==>
 * ((prev, func) => func(prev), iter, functions), ...args) => {
 *     return args.length > 0 ? reduce((prev, func) => func(prev), iter, functions), ...args) : (...args) => reduce((prev, func) => func(prev), iter, functions), ...args)
 * }
 * ==> 여기서는 args가 없으니까 args를 파라미터로 받는 함수로 리턴
 * (...args) => reduce((prev, func) => func(prev), iter, functions), ...args)
 *
 */

pipe(
  arr,
  filter((el) => el % 2 === 1),
  console.log
);

// TODO 전혀 이해 못함
