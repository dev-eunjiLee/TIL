### 참고 링크
- 블로그
    - [[MySQL] 뷰(View) 생성 이유 및 뷰 생성,수정삭제,조회](https://needjarvis.tistory.com/781)

***

# View

### 1. 생성 방법
```
    CREATE VIEW 명칭 AS
        SELECT 필드 1, 필드 2, ...
        FROM 테이블
        WHERE 조건
```

- union도 당연히 사용 가능
- View 생성 이후 추가, 수정, 삭제된 데이터도 반영된다.


