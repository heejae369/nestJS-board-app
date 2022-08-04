import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres', 
    host: 'localhost', //postgres 설정 시의 호스트 
    port: 5432,       //postgres 설정 시의 호스트 포트
    username: 'postgres', //postgres 설정 시의 유저이름
    password: 'postgres', //postgres 설정 시의 비밀번호
    database: 'board-app', //postgres 설정 시의 DB이름
    entities: [__dirname + '/../**/*.entity.{js.ts'], // entity를 이용하여 DB테이블을 생성, 그래서 엔티티파일이 어디에 있는지 설정
    synchronize: true // true 값을 주면 애플리케이션을 다시 실행할 때에 엔티티안에서 수정된 컬럼의 길이 타입 변경값 등을 해당 테이블을 Drop한 후 다시 생성해줌 
}