/**
 * 📌 Math
 * 1. 수학 연산과 관련된 메소드를 내장하고 있는 내장 객체
 * 2. 주요 프로퍼티 및 메소드
 *   1) Math.PI
 *       → 원주율 PI 값을 반환
 *   2) Math.abs(x)
 *       → x 의 절대값을 반환
 *   3) Math.pow(base, exponent)
 *       → base 를 exponent 거듭제곱한 숫자 값을 반환
 *   4) Math.sqrt(x)
 *       → x 에 루트를 씌운 값을 반환
 *       → x 가 음수라면 NaN 반환
 *   5) Math.ceil(x)
 *       → x 보다 크거나 같은 숫자(이상) 중 가장 작은 숫자를 integer 로 반환 (올림)
 *   6) Math.floor(x)
 *       → x 보다 작거나 같은 숫자(이하) 중 가장 큰 숫자를 integer 로 반환 (내림)
 *   7) Math.round(x)
 *       → x 를 반올림한 값과 가장 가까운 정수 값을 반환 (반올림)
 *   8) Math.trunc(x)
 *       → x 의 소수부분을 제거하고 숫자의 정수 부분을 반환 (절사)
 *   9) Math.max(value1[, value2[, ...]])
 *       → 주어진 숫자 중 가장 큰 수를 반환
 *       → 숫자가 아닌 값이 전달되면 NaN 반환
 *       → 전달값이 없는 경우 -Infinity 반환
 *  10) Math.min(value1[, value2[, ...]])
 *       → 주어진 숫자 중 가장 작은 값을 반환
 *       → 숫자가 아닌 값이 전달되면 NaN 반환
 *       → 전달값이 없는 경우 Infinity 반환
 *  11) Math.random()
 *       → 0.0 이상 1.0 미만의 부동 소수점 의사 난수 반환
 */

console.log(Math.PI);

console.log(Math.abs(-10));                     // 10
console.log(Math.abs('-10'));                   // 10
console.log(Math.abs(''));                      // 0
console.log(Math.abs([]));                      // 0
console.log(Math.abs(null));                    // 0
console.log(Math.abs(undefined));               // NaN
console.log(Math.abs({}));                      // NaN
console.log(Math.abs('math'));                  // NaN
console.log(Math.abs());                        // NaN

console.log(Math.pow(2, 2));                    // 4        
console.log(Math.pow(2));                       // NaN

console.log(Math.sqrt(4));                      // 2             
console.log(Math.sqrt(-4));                     // NaN
console.log(Math.sqrt(2));                      // 1.4142135623730951
console.log(Math.sqrt(1));                      // 1
console.log(Math.sqrt());                       // NaN

console.log(Math.ceil(10.1));                   // 11             
console.log(Math.ceil(10.9));                   // 11
console.log(Math.ceil(10.0));                   // 10
console.log(Math.ceil(-10.1));                  // -10
console.log(Math.ceil(-10.9));                  // -10
console.log(Math.ceil());                       // NaN

console.log(Math.floor(10.1));                  // 10             
console.log(Math.floor(10.9));                  // 10
console.log(Math.floor(-10.1));                 // -11
console.log(Math.floor(-10.9));                 // -11
console.log(Math.floor(10));                    // 10
console.log(Math.floor());                      // NaN

console.log(Math.trunc(10.1));                  // 10             
console.log(Math.trunc(10.9));                  // 10
console.log(Math.trunc(-10.1));                 // -10
console.log(Math.trunc(-10.9));                 // -10
console.log(Math.trunc(10));                    // 10
console.log(Math.trunc());                      // NaN

console.log(Math.round(10.1));                  // 10             
console.log(Math.round(10.9));                  // 11
console.log(Math.round(-10.1));                 // -10
console.log(Math.round(-10.9));                 // -11
console.log(Math.round(10));                    // 10
console.log(Math.round());                      // NaN


console.log(Math.max(10));                      // 10             
console.log(Math.max(10, 20));                  // 20
console.log(Math.max(10, 20, 30));              // 30
console.log(Math.max());                        // -Infinity

console.log(Math.min(10));                      // 10             
console.log(Math.min(10, 20));                  // 10
console.log(Math.min(10, 20, 30));              // 10
console.log(Math.min());                        // Infinity