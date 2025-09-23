/**
 * 📌 암묵적 타입 변환 vs 명시적 타입 변환
 * 1. 암묵적 타입 변환 (implicit-coercion)
 *   1) 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것
 *   2) 암묵적 타입 변환은 코드에서 드러나지 않으므로 타입 변환된 결과를 예측할 수 있어야 오류 방지 가능
 * 2. 명시적 타입 변환 (explicit-coercion)
 *   1) 개발자의 의도에 따라 값의 타입을 변환시키는 것
 *   2) 자바스크립트에서 기본 제공하는 표준 빌트인 생성자 함수(String, Number, Boolean)를 사용하는 방법,
 *      빌트인 메소드를 사용하는 방법이 있음
 */

// 1. 문자열타입(string)으로 변환

//  1) 문자열 연결 연산자(+) : 암묵적 변환
console.log(10 + '20') // '10' + '20' =? '1020'
console.log(true + 'HI') // 'true' + 'HI' => 'trueHi'

//  2) 템플릿 리터럴의 표현식 삽입 : 암묵적 변환
console.log(`결과: ${10 + 20}`); // '결과 : 30'

// 3) String 생성자 함수 이용 : 명시적 변환
// console.log(10.length);
console.log(String(10).length);// 10 => '10'  => 2
console.log(String(true)) //true => 'true'

// 4) .toString() 메소드 이용 : 명시적 변환
console.log( (10).toString()); // 10 => '10'


// 2.연산자에 의한 숫자 변환

// 1) 산술연산자에 의한 변환
  console.log(10 - '5');
  console.log(10 > '5');
  console.log(+'');

// 2) 비교연산자에 의한 변환
  console.log(10 > '5') // 10 > 5
  console.log('a' > 'b'); // true

// 3) Number 생성자 함수 이용
  console.log(Number('10')); // 10
  console.log(Number('10.01')) // 10.01
  console.log(Number('Javscript')) // NaN
  console.log(Number(true)); // 1
  console.log(Number(false)); // 0

// 4) parseInt(), parseFloat() 함수 이용
console.log(parseInt('10')); // 10
console.log(parseFloat('10')) // 10

console.log(parseInt('10.01')); // 10
console.log(parseFloat('10.01')) // 10

console.log(parseInt('10000.1원')); // 10000
console.log(parseFloat('10000.1원')) // 10000.1
console.log(Number('10000.1원')); // NaN

// 3. 논리 타입(boolean)으로 변환

// 1) 암묵적 변환

// if(조건식 => 참/거짓) {
//   참일 경우에만 실행할 구문
// }
if(true) console.log('if(true)')
if(false) console.log('if(false)')

/*
  자바스크립트엔진에서는 boolean 타입(true/false)이 아닌 값들을
  Truthy값(참으로 평가되는 값), Falsy값(거짓으로 평가되는 값)으로 구분함
  Truthy값은 암묵적으로 ture로 변환 / Falsy값은 암묵적으로 false로 변환  
*/

if(undefined) console.log('if(undefined)') // false
if(null) console.log('if(null)') // false
if(10) console.log('if(10)') // if(10) true
if(0) console.log('if(0)') // false
if(NaN) console.log('if(NaN') // false
if('안녕') console.log('if(안녕)') // if(안녕) true
if('') console.log('if()') // false

// 정리 . false, undefined, null, 0, NaN, '' 전부다 false으로 평가
// 위의 예시 이외에는 전부다 true