import { IsNotEmpty } from "class-validator";

export class createBoardDto{
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;


    /* pipe적용 전 기존코드는 아래와 같다
    title: string;
    description: string;
    
    pipe 적용 이유 : 해당 title, desc에 유효성검사를 하기위해
    그래서 IsNotEmpty() pipe를 이용한다

    해당 pipe를 이용하기 위해선 여기서 파이프를 적용하고 
    컨트롤러에서 UsePipes를 이용하여 컨트롤러에서 사용하여 핸들러 레벨에서 pipe를 작동하게한다
    
    */
}
