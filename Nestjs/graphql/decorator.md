### 참고 링크

- 공식문서
  - [NestJS > GRAPHQL > Resolvers](https://docs.nestjs.com/graphql/resolvers#class-inheritance)

---

# IsAbstract

```
    function BaseResolver<T extends Type<unknown>>(classRef: T): any {
    @Resolver({ isAbstract: true })
    abstract class BaseResolverHost {
        @Query((type) => [classRef], { name: `findAll${classRef.name}` })
        async findAll(): Promise<T[]> {
        return [];
        }
    }
    return BaseResolverHost;
    }
```

- The isAbstract: true property indicates that SDL (Schema Definition Language statements) shouldn't be generated for this class. Note, you can set this property for other types as well to suppress SDL generation.
  - isAbstract: true 속성은 SDL(Schema Definition Language statements)가 이 클래스를 생성하지 않도록 한다. 다른 유형에서도 설정하여 SDL에 생성되는걸 막을 수 있다.
