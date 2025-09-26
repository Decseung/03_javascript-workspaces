/**
 * 📌 Number
 * 1. 숫자를 표현하고 다루는 내장 객체 (Primitive Wrapper Object)
 * 2. 숫자 타입의 데이터를 다루는 데 사용
 * 3. 주요 생성자
 *   1) Number() 생성자
 *       → new Number('123') === 123
 * 4. 주요 프로퍼티
 *   1) Number.NaN
 *       → Not-A-Number : 숫자가 아님
 *       → NaN 과 동일함
 *   2) Number.NEGATIVE_INFINITY
 *       → 음의 무한대
 *       → -Infinity 와 동일함
 *   3) Number.POSITIVE_INFINITY
 *       → 양의 무한대
 *       → Infinity 와 동일함
 *   4) Number.MAX_VALUE
 *       → JavaScript에서 표현할 수 있는 가장 큰 양수 값
 *   5) Number.MIN_VALUE
 *       → JavaScript에서 표현할 수 있는 가장 작은 양수 값
 * 5. 주요 메소드
 *   1) Number.isFinite(value)
 *       → 전달된 value 가 정상적인 유한수이면 true 아니면 false 반환
 *   2) Number.isInteger(value)
 *       → 전달된 value 가 정수이면 true 아니면 false 반환
 *   3) Number.isNaN(value)
 *       → 전달된 value 가 NaN 이면 true 아니면 false 반환
 *   4) Number.parseFloat(string)
 *       → 전달된 문자열을 부동소수점 실수로 파싱한 결과를 반환
 *       → 전달된 값이 문자열이 아니면 자동으로 문자열로 변환(ToString 추상 연산)한 후 처리함
 *       → 전역 함수 parseFloat() 과 동일함 (Number.parseFloat === parseFloat)
 *   5) Number.parseInt(string[, radix])
 *       → 전달된 문자열을 특정 진수값으로 파싱한 결과를 반환
 *       → 전달된 값이 문자열이 아니면 자동으로 문자열로 변환(ToString 추상 연산)한 후 처리함
 *       → radix(Optional)
 *         1) 2부터 36까지의 정수 값
 *         2) 16 : 생략하거나 0을 지정한 경우, string 이 0x 또는 0X로 시작하는 경우
 *         3) 10 : 나머지 모든 경우
 *       → 전역 함수 parseInt() 와 동일함 (Number.parseInt === parseInt)
 *   6) Number.prototype.toFixed([digits])
 *       → 고정 소수점 표기법을 사용하여 나타낸 수를 문자열로 바꾼 값을 반환
 *       → 소수점 뒤에 나타날 자릿수, 0 ~ 20 사이 값을 가짐, 기본값은 0
 */
 
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY); 
console.log(Number.POSITIVE_INFINITY);   
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.isFinite(10));           // true
console.log(Number.isFinite(-10));          // true
console.log(Number.isFinite(Infinity));     // false
console.log(Number.isFinite(-Infinity));    // false
console.log(Number.isFinite(NaN));          // false
console.log(Number.isFinite(null));         // false

console.log(Number.isInteger(10));          // true
console.log(Number.isInteger(-10));         // true
console.log(Number.isInteger(10.10));       // false
console.log(Number.isInteger(-10.10));      // false
console.log(Number.isInteger('10'));        // false
console.log(Number.isInteger(false));       // false
console.log(Number.isInteger(Infinity));    // false
console.log(Number.isInteger(-Infinity));   // false

console.log(Number.isNaN(10));              // false    
console.log(Number.isNaN(-10));             // false
console.log(Number.isNaN('10'));            // false
console.log(Number.isNaN(true));            // false
console.log(Number.isNaN(NaN));             // true
console.log(Number.isNaN(undefined));       // false

let str = '123.456';
console.log(Number.parseInt(str));          // 123
console.log(Number.parseFloat(str));        // 123.456

let num = 1.23456;
console.log(num.toFixed());               // 1
console.log(num.toFixed(3));              // 1.235    // toFixd는 엄연히 따지면 문자열 타입으로 반환한다.
console.log(num.toFixed(1));              // 1.2

/*
  실습. getTotal() 함수 구현하기 

  1. 기능
     인자로 전달된 배열에 포함된 요소들 중 숫자만 더해서 반환하는 함수
     단, 소수 이하 자릿수는 모두 버린 뒤 더하기를 수행함
         숫자로 이루어진 문자열도 덧셈 연산 진행할 것 
  2. 매개변수
     배열인자를 받을 수 있는 매개변수 한개 
  3. 반환
     배열에 포함된 숫자만 모두 더한 값

   ex) const array = ['hello', 'world', 10, 20, 30.23, '40', { cpu: 'i7' }, true, false, () => {}]; 
       console.log(getTotal(array));  // 100 출력
*/

console.log('---------------------------')

const array = ['hello', 'world', 10, 20, 30.23, '40', { cpu: 'i7' }, true, false, () => {}]; 

function getTotal(arr) {
  let check = arr.map((arr) => Number.parseInt(arr))
  let numFilter = check.filter((e) => Number(e))
  let sum = numFilter.reduce((e, a) => e + a)
  console.log(sum)
  // 1. 연산을 수행할 배열 전달 받기 => 매개변수
  // 2. 배열에 포함된 요소들 순회하기 => for문 또는 forEach문
  // 3. 각 요소들이 숫자로 취급될만한 것인지 확인하기 => 각 요소들이 숫자인지(조건문)
  // 4. 맞다면 정수형태로 변환해서 총합 구가기 => 정수형 변환 총합 누적
  let total = 0;

  arr.forEach((item)=> {
    if(!Number.isNaN(item / 1) && typeof item !== 'boolean'){
      total += Number.parseInt(item)
    }
  })


let anotherSol =   arr
                    .filter( (item) => !Number.parseInt(item) / 1 && typeof item !== 'bollean')
                    .reduce((a, e) => a + e)

console.log(anotherSol)
}

getTotal(array)