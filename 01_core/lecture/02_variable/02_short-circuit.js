/**
 * 📌 단축 평가
 * 1. Short-Circuit Evaluation
 * 2. 표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것
 *     → 논리 연산자의 평가 결과가 확정 된 경우 나머지 평가 과정이 생략됨 
 * 3. 종류
 *   1) 논리 AND (&&)
 *       → 왼쪽 피연산자가 falsy 값일 경우 왼쪽 피연산자를 바로 반환 (오른쪽은 평가하지 않음)
 *       → 왼쪽 피연산자가 truthy 값일 경우 오른쪽 피연산자를 평가해서 반환 
 *   2) 논리 OR (||)
 *       → 왼쪽 피연산자가 truthy 값일 경우 왼쪽 피연산자를 바로 반환 (오른쪽은 평가하지 않음)
 *       → 왼쪽 피연산자가 falsy 값일 경우 오른쪽 피연산자를 평가해서 반환 
 */

// && - 좌항이 falsy 값일 경우
console.log(false && 'banana') // false
console.log(0 && 'banana') // 0
console.log('' && 'banana'); // ''
// && - 좌항이 truthy 값일 경우
console.log(true && 'banana');
console.log(10 && 'banana')
console.log('apple' && 'banana');

// || - 좌항이 truthy 값일 경우
console.log(true || 'banana');
console.log(10 || 'banana')
console.log('apple' || 'banana');
// || - 좌항이 falsy 값일 경우
console.log(false || 'banana')
console.log(0 || 'banana')
console.log('' || 'banana');

// 적용 사례 1. 조건문을 간결하게 표현할 때 사용한다.
// 로딩중 상태일 경우 "로딩중입니다..." 출력
let isLoading = true;
if(isLoading) {
  console.log('로딩중입니다...')
}

isLoadiing && console.log('로딩중입니다...') // 좌항 결과가 true 일 경우 뒤쪽 구문 실행
                                             // 좌항 결과가 false 일 경우 뒤쪽 구만 실행 x

// 사용자 입력값이 존재할 경우 해당 값 출력
// let input = '안녕';
input && console.log(`사용자 입력값 : ${input}`);

// 적용 사례 2. 기본값 걸정
// 변수 = 입력값 || default 값
// 입력값이 존재하지 않을 경우 시스템 상의 기본값 대입
let value = '' || '입력안됨';
console.log(value);

let age = 30 || 20
console.log(age);

/**
 * 📌 ES11에 추가된 연산자
 * 1. null 병합 연산자 (??)
 *   1) nullish coalescing operator
 *   2) 좌항의 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자를 평가하여 반환 
 *   3) 기존에 좌항이 falsy 값일 경우 오른쪽 피연산자를 평가했던 || 와 달리 
 *      0, '', false 값은 유효한 값으로 처리함 
 * 2. 옵셔널 체이닝 연산자 (?. 또는 ?[])
 *   1) optional chaining operator
 *   2) 좌항의 피연산자가 null 또는 undefined일 경우 undefined를 반환, 
 *      그렇지 않으면 우항의 프로퍼티 참조를 이어감 
 *   3) null 병합 연산자와 동일하게 0, '', false 값은 유효한 값으로 처리함
 *   4) 주로 객체의 프로퍼티 참조할때 사용 
 */

// 1. null 병합 연산자 (??)
// 입력된 점숙밧이 존재하지 않을 경우 50 점으로 대입
// const grade = 0 || 50;
const grade = 0 ?? 50; // ?? 사용시 0 데이터를 유의미한 값을 ㅗ판별
console.log(grade)

// 사용자 입력값 (선택사항) 기록
// const input = '호오오오오' || 'hello';
const input = undefined ?? 'hello';
console.log(input)

 // 2. 옵셔널 체이닝 연산자
 
 // 사용자가 입력한 문자열의 길이(문자열.length) 출력
 // 'apple' => 5
 // ''      => 0
 // null, undefined => undefined

 let str = null;
//  console.log(str.length); // length 프러퍼티에 바로 접근
 // console.log(str.length)       // 1) length 프로퍼티에 바로 접근 : null일 경우 오류 발생
 // console.log(str && str.length) // 2) 단축 평가(&&) 사용 : 빈무자열이 falsy 값으로 취급되서 length
 console.log(str?.length)