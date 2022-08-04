import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { BoardStatus } from "./board-status.enum";


@Entity() // 해당 데코레이터를 통해 해당 모델이 엔티티 모델임을 선언
export class Board extends BaseEntity{

    @PrimaryColumn() //Primary 키  = id, uuid()를 통해 고유한 아이디가 온다
    id: number;

    @Column()  // 글 제목
    title: string;

    @Column() // 글 내용
    description: string;

    @Column() // 글 공개여부 상태
    status: BoardStatus;
}