/**
 * 📌 Date
 * 1. 특정 날짜 및 시간 정보를 가지는 내장 객체
 * 2. 주요 생성자
 *   1) Date() 
 *       → 현재 날짜와 시간을 가진 Date 객체를 반환
 *   2) Date(value)
 *       → unix timestamp (1970-01-01 0:00:00 초부터 카운트하는 시간(단위:밀리초)) 를 가진 Date 객체를 반환
 *   3) Date(dateString)
 *       → 문자열 인식의 경우 동작이 일관적이지 않으므로 사용 안 하기를 권장
 *   4) Date(year, monthIndex)
 *       → monthIndex : 0 ~ 11
 *   5) Date(year, monthIndex, day)
 *       → day : 1 ~ 31
 *   6) Date(year, monthIndex, day, hours)
 *       → hours : 0 ~ 23
 *   7) Date(year, monthIndex, day, hours, minutes)
 *       → minutes : 0 ~ 59
 *   8) Date(year, monthIndex, day, hours, minutes, seconds)
 *       → seconds : 0 ~ 59
 *   9) Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
 *       → milliseconds : 0 ~ 999
 * 3. 주요 메소드
 *   1) Date.now()
 *       → 현지 시간을 타임스탬프 형식으로 반환
 *       → 타임스탬프(Timestamp)
 *          : 특정 시점을 숫자로 표현한 값
 *          : 주로 컴퓨터 시스템에서는 1970년 1월 1일 00:00:00(UTC)을 기점으로 경과된 밀리초 값을 정수로 나타냄
 *   2) Date.prototype.getFullYear()
 *       → 현지 시간 기준 연도 반환
 *   3) Date.prototype.getMonth()
 *       → 현지 시간 기준 월 반환 (0 - 11)
 *   4) Date.prototype.getDate()
 *       → 현지 시간 기준 일 반환 (1 - 31)
 *   5) Date.prototype.getDay()
 *       → 현지 시간 기준 요일 반환 (일 - 토 => 0 - 6)
 *   6) Date.prototypye.getHours()
 *       → 현지 시간 기준 시 반환 (0 - 23)
 *   7) Date.prototype.getMinutes()
 *       → 현지 시간 기준 분 반환 (0 - 59)
 *   8) Date.prototype.getSeconds()
 *       → 현지 시간 기준 초 반환 (0 - 59)
 *   9) Date.prototype.getMiliseconds()
 *       → 현지 시간 기준 밀리초 반환 (0 - 999)
 *  10) Date.prototype.getTime()
 *       → 1970년 1월 1일 00:00:00(UTC)을 기점으로 경과된 밀리초 반환
 *  11) Date.prototype.toXXXString
 *       → 사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜 반환 
 */
console.log(new Date());
console.log(new Date(0));
console.log(new Date(24 * 60 * 60 * 1000));
console.log(new Date('Jul 29, 2025 17:50:00'));
console.log(new Date('2025/07/29/17:50:00'));
console.log(new Date(2025, 6, 29, 17, 50, 30, 1000));

const now = Date.now();
console.log(now);
console.log(new Date(now));

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());                 // 일요일부터 월요일을 0~6으로 반환
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

date.setFullYear(2025);
date.setMonth(6);
date.setDate(29);
date.setHours(17);
date.setMinutes(50);
date.setSeconds(30);
date.setMilliseconds(500);
console.log(date); // UTC 기준으로 출력해서 9시간 차이나게 나올 수 있음 (toISOString)

console.log(new Date().getTime())
console.log(date.toLocaleString())


console.log(today);
console.log(today.toISOString());       // 2025-04-20T13:12:24.648Z  => UTC 기준

console.log(today.toString());          // Sun Apr 20 2025 22:12:24 GMT+0900 (대한민국 표준시)
console.log(today.toDateString());      // Sun Apr 20 2025
const today = new Date();
console.log(today.toTimeString());      // 22:12:24 GMT+0900 (대한민국 표준시)

console.log(today.toLocaleString());    // 2025. 4. 20. 오후 10:12:24
console.log(today.toLocaleDateString()); // 2025. 4. 20.
console.log(today.toLocaleTimeString()); // 오후 10:12:24