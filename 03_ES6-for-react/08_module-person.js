/*
  * module
  - 개발 규모가 커질 수록 파일들이 분리되서 관리
    분리된 파일 ==== 모듈
  - 각 파일에 정의되어 있는 함수, 변수, 객체 등등 내보낼 수 있다.(export)
  - 특정 모듈의 export 하고 있는 값을 가져와서 사용 할 수 있음(import)
*/

// named export : 한 모듈에서 여러개의 데이터 내보낼 때 사용 : 외부에서 내보낸 변수의 이름을 참조해서 사용할 수 있도록 하는 구문
//                현재 모듈에서 여러개의 변수를 export 할 때 주로 사용
// 방법 1) 선언문 앞에 export를 붙이기
export const name = "홍길동";
export const age = 40;

// 방법 2 미리 선언해두고 한번에 export 하는 방법
const hobby = ["running", "cooking"];
const dream = "houseKeeper";

export { hobby, dream };
