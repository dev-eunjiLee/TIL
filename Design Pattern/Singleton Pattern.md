### 참고 링크

- 블로그
  - [멀티스레드 환경에서의 싱글톤 패턴](https://jungwoon.github.io/java/2019/08/11/Singleton-Pattern-with-Multi-Thread.html)
  - [NodeJS Singleton pattern](https://velog.io/@ehgks0000/NodeJS-Singleton-pattern)
  - [nestjs 의존성 주입, 싱글턴 패턴](https://dkrnfls.tistory.com/232)
  - [싱글톤 패턴(싱글톤 패턴(Singleton pattern)](https://gyoogle.dev/blog/design-pattern/Singleton%20Pattern.html)

---

# Singleton pattern

### 정의

- 애플리케이션이 시작될 때, 어떤 클래스가 최초 한 번만 메모리를 할당하고 해ㅏㅇ 메모리에 인스턴스를 만들어 사용하는 패턴
- GoF(Gang of Four) 디자인 패턴 중 하나로 생성자가 여러 차례 호출되더라도 실제로 생성되는 인스턴스는 하나이고, 최초 생성 이후에 호출된 생성자는 최초에 생성한 객체를 리턴하는 형태
- 전체 시스템에서 하나의 인스턴스만 존재하도록 보장하는 객체 생성패턴
- 특정 클래스의 인스턴스를 오직 하나만 유지하고, 동일 클래스에서 새로운 객체를 생성한다 해도 처음 만들어진 객체를 사용
- NestJS에서의 싱글톤
  - NestJS의 경우 의존성이 주입된 모듈들을 global scope로 최초 실행시 메모리에 인스턴스를 띄워두고 필요한 경우 메모리에서 꺼내쓴다(scope는 설정 가능)
  - constructor에서 필요한 것들을 명시하면, nest에서 이것들을 메모리에 생성된 싱글턴 객체에서 찾아와 의존성을 주입해준다
- 싱글턴 객체는 여러 모듈에서 접근할 수 있기 때문에 private readonly를 명시하여 override되는 것을 막아야한다.

### 장점

- 메모리상 이점: 인스턴스가 하나만 생성
- 성능 향상: 이미 만들어둔 객체를 호출하기 때문에 객체 로딩시간이 줄어든다
- 다른 인스턴스와 데이터 공유가 쉬움

### 단점

- 다른 클래스들 간의 결합도가 높아지는 경우가 발생 => 유지 보수가 힘들고 테스트를 원활하게 진행하기도 어렵다
- 멀티스레드 환경에서 동기화처리를 하지 않은 경우 인스턴스가 2개 생성
