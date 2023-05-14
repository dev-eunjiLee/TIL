### 참고 링크
- 블로그
    - [NestJS Interceptor와 Lifecycle](https://blog-ko.superb-ai.com/nestjs-interceptor-and-lifecycle/)

***

# RxJS
- 이벤트 스트림을 다루는 라이브러리

### 1. Observable
- 이벤트가 흐르는 stream
- 누군가 구독(subscribe)을 해야 event를 발행(publish)한다.
  - Observer가 Observable을 구독하면서 next, error, complete 키워드를 사용해 observable에 흐르는 이벤트를 처리한다.

### 2. Operator
Observable에서 각 이벤트들에 대한 연산을 할 수 있는 pure function

### 3. Observer
- Observable을 구독하는 대상
- Observer를 정의하고 next, error, complete를 정의한 후 Observable에 구독을 하면 완성된다.
- next: Observable에서 들어오는 evnet 처리
- error: Observable에서 error가 발생했을 때 event 처리
- complete: Observable이 종료되면 호출
