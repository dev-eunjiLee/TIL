### 참고 링크
- 블로그
    - [📘 객체를 타입으로 변환 - keyof / typeof 사용법](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-keyof-typeof-%EC%82%AC%EC%9A%A9%EB%B2%95)
- 강의
  - [노마드코더 Typescript로 블록체인 만들기 2.2 Types of TS part One](https://nomadcoders.co/typescript-for-beginners/lectures/3670)
***

# type
### 선언
- optional로 타입을 선언한 경우 해당 값이 실제 존재하는지를 확인하는 로직을 선행하면 좋다
```
  const player : {
    name: string,
    age?: number
  } = {
    name: "nico"
  }
  
  if (player.age && player.age < 10) {
  }
```
<br />

- type alias: 반복해서 사용하는 타입의 경우 따로 타입을 선언한 후 호출하여 사용하면 된다
```
  type Age = number
  type Name = string
  
  type Player = {
    name: Name,
    age?: Age
  }
  
  const nico : Player = {
    name: "nico"
  }
  const lynn : Player = {
    name: "nico"
  }
```

<br />

- return 타입 지정
```
  type Age = number
  type Name = string
  
  type Player = {
    name: Name,
    age?: Age
  }
  
  function playerMaker(name:string):Player {
    return {
      name
    }
  }
  
  // * ===== 위와 같은 함수를 만드는 다른 코드 ===== * //
  const playerMaker = (name:string): Player => ({ name })
  
  // * ===== 위와 같은 함수를 만드는 다른 코드 끝 ===== * //
  
  
  
  const nico = playerMaker("nico")
  nico.age = 12
```
<br />

### 1. typeof 연산자
- 객체 데이터를 객체 타입으로 변환해주는 연산자
```
    const a = {
        a: "a",
        b: "b",
    }
    
    type A = typeof a;
    /*
        type A = {
            a: string;
            b: string;
        }
    */    
```
- 함수: 타입으로 변환하여 재사용 가능

### 2. keyof 연산자
- 객체 형태의 타입을 따로 속성들만 뽑아 모아 유니온 타입으로 만들어주는 연산자
```
    type a = {
        a: string;
        b: number
    }
    type A = keyof a
    /*
        type A = a | b
    */
```
- 만약 객체의 키 값을 상수 타입으로 사용하고 싶을때는 `keyof typeof`를 같이 붙여 사용하면 된다.
