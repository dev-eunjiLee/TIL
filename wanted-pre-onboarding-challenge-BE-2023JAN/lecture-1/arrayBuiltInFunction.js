/**
 * 원티드 프리온보딩 챌린지 백엔드 1일차 - 1
 */

const arr = [1,2,3,4,5,6,7,8,9,10]

/**
 * Array.forEach: 배열을 순회하면서 func 실행
 */

const forEach = (func, iter) => {
    for(const el of iter){
        func(el)
    }
    return iter
}

console.log(forEach(console.log, arr))

/**
 * Array.map: 배열을 순회하면서 func를 실행해서 새로운 배열을 리턴
 */

const map = (func, iter) => {
    const result = []
    for(const el of iter){
        result.push(func(el))
    }
    return result
}

console.log(map((a) => {return a+2}, arr))



/**
 * Array.filter: 배열을 순회하면서 func를 실행해서 조건에 맞는 값만 배열에 담아 리턴
 */

const filter = (func, iter) => {
    const result = []
    for(const el of iter){
        if(func(el)) result.push(el)
    }
    return result
}

console.log(filter(a =>  a > 5, arr) )

/**
 * Array.reduce: 배열을 순회하면서 func를 반복 적용해서 새로운 결과 값을 얻어낸다.
 *
 * iterable protocol
 * - 순회 가능한 자료형은 해당 프로토콜을 따라야 한다.
 * - for ... of 문으로 순회 가능한 객체를 의미
 * - 1. [Symbol.iterator]() 함수가 구현되어야 iterable protocol을 만족하는 iterator 객체이다
 * - 2. iterator.next(): iterator 객체는 next 함수가 있으며, 이 함수는 done 객체(반복이 모두 끝났는지를 나타냄), value(현재 순서의 값)을 리턴해야한다.
 */

const reduce = (func, acc, iter) => {
    if (iter === undefined){
        iter = acc[Symbol.iterator]()
        acc = iter.next().value
    }
    for(const el of iter){
        acc = func(acc, el)
    }
    return acc
}

console.log(reduce((prev, curr) => prev + curr,  'abcd'))
console.log(reduce((prev, curr) => prev + curr,  arr))


