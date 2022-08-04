// board의 구조만 정의하기 위해서 interface를 사용(변수의 타입만 체크하는 interface)
// 모델을 정의하는데 class, interface를 사용한다.
// class와 interface의 차이 : class는 인스턴트 또한 생성가능 

// export interface Board{
//     id: String;
//     title: String;
//     description: String;
//     status: BoardStatus;
// } Board 모델 타입은 Entity에서 만들어줬기에 이건 더이상 사용 하지않음
// 그렇지만 밑의 BoardStatus는 계속 사용함
// 따라서 원래 파일 이름인 board.model.ts 를 board-status.enum.ts 로 바꿈

export enum BoardStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}