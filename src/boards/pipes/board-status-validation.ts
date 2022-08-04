import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform{
    // 보드의 상태(공개 비공개글)의 유효성 체크이기에 컨트롤러 중에서도 보드의 Status부분에 삽입
    // Status값만 유효성 체크하면 되기에 파라미터 수준으로 적용예정

    // pirvate와 Public만 읽을 수 있도록 설정..!
    readonly StateOption = [
        // readonly 클래스 외부에서 접근할 수 있으나, 값을 변경할 수 없다.
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transform(value: any, metadata: ArgumentMetadata) {
        console.log('value', value);
        console.log('metadata', metadata);

        value = value.toUpperCase(); // 대문자로 만듬

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn't in the status`);
        }
        return value;
    }

    isStatusValid(status: any){
        const index = this.StateOption.indexOf(status);
        // StateOption 안에 Value(body로 들어오는 status값) 이 있으면 인덱스로 리턴
        // 없으면 -1(인덱스로 올 수 없는 값)로 리턴하여 에러 발생시킴

        return index !== -1;
        // 인덱스 값이 -1이 아니면 리턴시키고, -1이면 false가 되어 위의 에러문구 출력
    }
}