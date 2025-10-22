// named export 한 데이터 가져오기(import)
// {}로 구조 분해해서 가져오기
// 다른이름으로 사용하고자 할 경우 as로 이름을 바꿀 수 있다.

import { name, age, hobby as h, dream as d } from "./08_muduel-person.js";

const person = {
  name: name,
  age: age,
  hobby: h,
  dream: d,
};

const returnMessage = () => {
  return `${name}님 환영쓰`;
};

// default export : 모듈에서 하나만 내보낼 수 있는 기본값(주요값)
//                  해당 모듈의 **대표적인 기능**(컴포넌트, 함수 등)이 있을때 주로 사용
export { person };
export default returnMessage;
