### 참고 링크
- 블로그
    - [멀티스레드 환경에서의 싱글톤 패턴](https://jungwoon.github.io/java/2019/08/11/Singleton-Pattern-with-Multi-Thread.html)
    - [NodeJS Singleton pattern](https://velog.io/@ehgks0000/NodeJS-Singleton-pattern)
***

# Singleton pattern

### 정의
- GoF(Gang of Four) 디자인 패턴 중 하나로 생성자가 여러 차례 호출되더라도 실제로 생성되는 인스턴스는 하나이고, 최초 생성 이후에 호출된 생성자는 최초에 생성한 객체를 리턴하는 형태
- 전체 시스템에서 하나의 인스턴스만 존재하도록 보장하는 객체 생성패턴
- 특정 클래스의 인스턴스를 오직 하나만 유지하고, 동일 클래스에서 새로운 객체를 생성한다 해도 처음 만들어진 객체를 사용

### 장점
- 메모리상 이점: 인스턴스가 하나만 생성
- 성능 향상: 이미 만들어둔 객체를 호출하기 때문에 객체 로딩시간이 줄어든다
- 다른 인스턴스와 데이터 공유가 쉬움