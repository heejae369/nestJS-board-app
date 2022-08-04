import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";

@EntityRepository(Board) //보드 엔티티의 레퍼지토리로 사용하겠다고 데코레이터로 선언하는 부분인데 버번이 바뀌며 선언할 필요가 없나봄
export class BoardRepository extends Repository<Board>{


}