// board의 구조만 정의하기 위해서 interface를 사용(변수의 타입만 체크하는 interface)
// 모델을 정의하는데 class, interface를 사용한다.
// class와 interface의 차이 : class는 인스턴트 또한 생성가능 

export interface Board{
    id: String;
    title: String;
    description: String;
    status: BoardStatus;
}

export enum BoardStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}