### 참고 링크
- 블로그
  - [NestJS Interceptor와 Lifecycle](https://blog-ko.superb-ai.com/nestjs-interceptor-and-lifecycle/)


## 사전에 필요한 개념

[RxJS](../JS/RxJS.md)

# NestJS Interceptor
##### Request와 Response가 진행될 때, 중간에서 값을 Intercpet한 뒤, 다시 보내는 역할
- 추가적인 로직이 필요한 경우 사용(ex: Logger)
- AOP(Aspect Oriented Programming - 관점 지향 프로그래밍)에 영감을 받아 만들어짐
  - 공통으로 사용되는 로직을 비즈니스 로직에서 분리 후 이를 재사용
- 받는 파라미터
  1. ExecutionContext: 현재 상태에 대한 정보를 가지고있는 클래스
  2. CallHandler: Observable 클래스

<br/>

##### Middleware와의 차이
- Middleware
  - 파라미터로 request, response, next를 받으며, request, response가 HTTP 위에서 동작하게 설계되어 있기 때문에 HTTP 통신이 아니면 사용이 불가
- Interceptor
  - 파라미터로 ExecutionContext 를 받아 처리하기때문에 HTTP 이외에도 WebSocket, GraphQL, RPC 위에서도 동작 가능
- Middleware, Guards, Interceptors, Pipes, Filters는 기술적으로는 모두 NodeJS에서 말하는 Middleware에 속하지만, NestJS에서는 Guards, Interceptors, Pipes, Filters를 enhancer라고 부르며, 꼭 미들웨어가 필요한 경우가 아니라면 enhancer 사용을 권장함