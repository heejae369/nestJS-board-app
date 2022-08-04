import { Injectable, NotFoundException } from '@nestjs/common';
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

    getBoardById(id: string): Board{
        const found = this.boards.find((board) => board.id===id); 
        
        if(!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
        // board 하나 가져오는데 보드 하나의 아이디(board.id)가 파라미터로 들어온 아이디(id)랑 일치해야한다
        //  기존코드 :       return this.boards.find((board) => board.id===id); 
        // 기존에는 id에 맞는 글이 없으면 없다고 리턴을 안하기에 해당 서비스에 NotFoundException(원하는 메세지) 추가

    }

    deleteBoard(id:string): void{
        //id를 이용해서 지우기에 입력값을 id로 두고
        // 따로 리턴값이 필요없기에 리턴값 void선언
        const found = this.getBoardById(id); // id에 없는 값이 들어올 수 있기에 해당 경우, 없다는 것을 알려주기 위해 처리
        // 따로 NotFoundException 을 주지 않는 이유는 위의 getBoardById 에서 처리해주기에 따로 exception처리 x
        this.boards = this.boards.filter((board) => board.id !== found.id); //
        // 예외처리전 코드   this.boards = this.boards.filter((board) => board.id !== id); // 
 
        //filter 함수 위의 식 : id가 겉은 건 지워내고 나머지를 보여줌
    }

    updateBoardStatus(id: string, status: BoardStatus): Board{
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
