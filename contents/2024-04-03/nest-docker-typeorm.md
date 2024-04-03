---
date: '2024-04-03'
title: 'nest프로젝트 docker환경에서 postgre, typeorm 설정하기'
categories: ['Web', 'nest', 'docker']
summary: ''
thumbnail: './7.png'
---

nest에서 postgresql과 typeorm을 사용하기 위한 환경 설정입니다.

```bash
nest new [name]
```

프로젝트 생성해 줍니다. [name]에는 프로젝트 이름을 넣습니다.

다음은 docker를 설치하고 진행합니다.

https://www.docker.com/get-started/

먼저 typeorm과 pg를 설치합니다.

```bash
yarn add @nestjs/typeorm typeorm pg
```

![](https://i.ibb.co/0Fw60zV/1.png)

docker-compose.yaml 파일을 만들어 줍니다.
docker가 설치되어있다면, 자동으로 docker파일로 인식할 겁니다.

![](https://i.ibb.co/5RwQ4x5/2.png)

```yaml
services:
  postgres:
    image: postgres:15
    restart: always
    volumes:
      - ./postgres-data:/var/lib/postgresql/data
    ports:
      - '5434:5432'
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: typeorm
```

docker-compose에 위 내용을 작성하고 postgres-data폴더를 경로로 설정한 곳에 만들어 줍니다.

![](https://i.ibb.co/0DZYbKc/5.png)

저 같은 경우 port를 5434로 변경했습니다. default port 5432를 사용하고 잇고 5433도 사용하고 있기 때문입니다.

![](https://i.ibb.co/rQJ2w0B/4.png)

module에서 import를 설정해 줍니다.

```tsx
imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5434,
      username: 'postgres',
      password: 'postgres',
      database: 'typeorm',
      entities: [],
      synchronize: true,
    }),
  ],
```

![](https://i.ibb.co/RCVZmQL/6.png)

```bash
docker compose up
```

docker를 실행시켜서 image를 다운받고 컨테이너를 만들어줍니다.

![](https://i.ibb.co/k959wqX/7.png)

nest프로젝트를 실행시켜 줍니다.

![](https://i.ibb.co/GTK5dWD/8.png)

실행이 완료되면 설정이 끝납니다.

![](https://i.ibb.co/nsjCPtL/9.png)
