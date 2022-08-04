import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import {BoardStatus } from './board-status.enum'; // 기존의 Board도 import되었던 것을 지움
import { createBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation';

@Controller('boards')
export class BoardsController {
    // constructor(private boardsService: BoardsService){}  
    
    // @Get('/')
    // getAllBoards():Board[]{
    //     return this.boardsService.getAllBoards(); 
    // }

    // @Post() 
    // @UsePipes(ValidationPipe) // 이미 만들어진 pipe 6가지 모듈중 하나를 사용, pipe강의 후 생김
    // createBoard(
    //     @Body() createBoardDto: createBoardDto
    //     // @Body('title') title: string,
    //     // @Body('description') description: string
    //     ): Board{ 
    //     // : Board로 리턴값에 type를 주는 이유 : 서비스에서 createBoard의 리턴값이 Board라서 
    //     // 그래서 Board[] 가 아니라 Board이다
    //     return this.boardsService.createBoard(createBoardDto);
    // }

    // @Get('/:id')
    // getBoardById(@Param('id') id: string): Board{ 
    //     // @Param의 id를 id:string에 입력함 **Param = localhost:5000?id=asjnlkas, ?뒤의 id를 param이라함
    //     // 게시물 하나를 리턴하기에 리턴의 타입을 Board로 선언함
    //     // localhost:5000?id=asndjlasdnla&title=asndjkasndl/   id와 title두개의 Param이 있는데 둘다 가져오려면 
    //     //@Param(빈칸) , 원하는 파라미터(param) 가져오려면 @Param('원하는 값')으로 하면됨
    //     return this.boardsService.getBoardById(id); 
    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void{ 
    //     return this.boardsService.deleteBoard(id); 
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    // ){
    //     return this.boardsService.updateBoardStatus(id, status);
    // }

}


/*  생성자(constructor) 부분 원래 코드 : 밑에 참고
해당 코드를 한줄로 수정가능 constructor(private boardsService: BoardsService){}
생성자 안(파라매터)에 private(접근제한자) 코드를 넣으면(선언하면) 접근제한자가 사용된 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다
그래소 헌쥴로 요역거능  

@Controller('boards')
export class BoardsController {

    boardsService: BoardsService;
    
    constructor(boardsService: BoardsService){
        this.boardsService = boardsService;
    }
}
원래 이론적으론는  밑에 두줄만 있으면 되지만  
자바스크립트에서는 this.boardsService가 인식하려면(프로퍼티를 사용하려면) 
위에서  boardsService: BoardsService; 가 있어야 
설정가능 해지는 속성이 생기기에 세줄로 설정 

 */