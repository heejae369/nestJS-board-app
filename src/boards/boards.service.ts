import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import {v1 as uuid} from 'uuid'; // v1은 uuid의 버전 중 하나
import { createBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];// private 선언 이유 다른 컴포넌트에서 게시판 글 boards 배열을 건드릴까봐
    // 타입 선언시, Board 뒤에 []이 붙는 이유 : 여러개의 배열들이 나오므로 배열들의 배열을 의미


    //모든 게시물 가져오기
    //보드 컨트롤러에서 사용 
    getAllBoards():Board[]{ 
        // 배열에 들어있는 모든 값을 받을 수 있음
        return this.boards;
    }

    createBoard(createBoardDto: createBoardDto):Board{ 
        //const title = createBoardDto.title;
        //const description = createBoardDto.description;
        // 위 두 코드를 합치면 아래와 같다. 
        const {title, description} = createBoardDto;
        // DTO 추가 전  코드 : createBoard(title: string, description: string )
        //DTO 역할 : 기존에는 파라미터를 일일히 입력하여 하나를 수정할 경우 모두를 수정하기에 그 과정에서 에러와 유효성입증하기가 힘든데
        //DTO 하나로 퉁 쳐 쉽게 개발가능
        // 일단 생성시에 기본 글 상태는 공개로 설정
        const board: Board = {
            id : uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC

            /*
            원래는 아래와 같이 일일히 설정해야하나 
            자바스크립트에서는 위와같이 중복된 것을 제거해도 해도 알아서 만들어줌
            title: title,
            description: description,
            */

            // title, description, status만 준 상태에서 Board 속성을 부여하면 
             //id가 없기에 에러가 남, uuid를 통해 고유 id 부여 
            
        }
        // boards에 생성한 게시판 글(board) 넣어야함 push()를 이영헤 넣음
        this.boards.push(board);
        return board;
        
    }

}
