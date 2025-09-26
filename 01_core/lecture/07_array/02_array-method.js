/*
  * Array 탐색 관련 메소드 

  1. Array.prototype.indexOf(element[, fromIndex])
      → 배열에 해당 요소가 위치해있는 첫번째 인덱스 반환 
      → 요소를 찾지 못하면 -1 반환 
      → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0

  2. Array.prototype.lastIndexOf(element[, fromIndex])
      → 배열에 해당 요소가 위치해있는 마지막번째 인덱스 반환 
      → 요소를 찾지 못하면 -1 반환 
      → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0
  
  3. Array.prototype.includes(element[, fromIndex])
      → 배열에 해당 요소가 존재하면 true, 존재하지 않으면 false 반환 
      → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0
*/

const foodList = ['물회', '삼계탕', '냉면', '물회', '수박'];

console.log(foodList.indexOf('물회'))
console.log(foodList.indexOf('물회' , 1))
console.log(foodList.indexOf('삼계탕', 2)) // -1 return 하는데 없어서 그럼.

console.log(foodList.lastIndexOf('물회')) 

console.log(foodList.includes('삼겹살')) 
console.log(foodList.includes('수박')) 

/*     
  * Array 동적으로 요소 추가/삭제 관련 메소드 

  1. Array.prototype.push(element1[, element2[, ...]])
     → 배열의 끝에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환

  2. Array.prototype.pop()
     → 배열의 마지막 요소를 제거하고 그 요소를 반환
     → 배열이 비어 있으면 undefined 반환
  
  3. Array.prototype.unshift(element1[, element2[, ...]])
     → 배열의 앞에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환

  4. Array.prototype.shift()
     → 배열의 첫번째 요소를 제거하고 그 요소를 반환
     → 배열이 비어 있으면 undefined 반환

  5. Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])
     → 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경함
     → start : 배열의 변경을 시작할 인덱스
     → 옵션 deleteCount : 배열에서 제거할 요소의 개수
       1) 생략하면 start 부터 모든 요소를 제거
       2) 0 이하이면 아무 요소도 제거하지 않음
     → 옵션 item1, item2, ... : 배열에 추가할 요소들
*/

const months = ['jan', 'Mar', 'April' , 'April', 'June', 'June']

console.log(months.pop())
console.log(months);

months.push('July')
console.log(months)

console.log(months.shift())
console.log(months)

console.log(months.unshift('Jan', 'Feb'));
console.log(months);

months.splice(4, 1, 'May')
console.log(months)

/*
  * Array 기타 메소드 
  
  1. Array.prototype.concat(items1[, items2[, ...]])
     → 배열의 요소들을 하나로 합친 새로운 배열 반환 

  2. Array.prototype.slice(start, end)
     → 배열의 start 인덱스 이상 end 인덱스 미만 범위의 요소들을 새로운 배열로 복사해서 반환 

  3. Array.prototype.reverse()
     → 배열 내의 요소들을 역순으로 변경하여 반환 

  4. Array.prototype.toString() 
     → 배열 내의 요소들을 콤마(,)로 연결한 문자열 반환 

  5. Array.prototype.join([separator])
     → 배열의 각 요소를 separator 로 연결한 하나의 문자열을 반환
     → separator 생략 시 콤마(,)로 연결
  
  6. Array.prototype.entries()
     → 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새 배열 반복자(Iterator) 객체를 반환
*/

const idol1 = ['아이브', '오마이걸'];
const idol2 = ['트와이스', '에스파'];
const idol3 = ['블랙핑크', '레드벨벳'];

const mix1 =  idol1.concat(idol2 , idol3);
console.log(idol1)

const extract = mix1.slice(1,4)
console.log(extract)
console.log(mix1);

console.log('---------------------')
// console.log(mix1.reverse()) // 원본배열 자체가 변경
// console.log(mix1)

console.log([...mix1].reverse());
console.log(mix1);

const seasons = ['spring', 'summer', 'autumn', 'winter'];
console.log(seasons.toString());
console.log(seasons.join());
console.log(seasons.join('/')) // join만 구분자를 사용하여 구분 할 수 있다. 구분자는 어떤것도 가능
console.log(seasons.join(' - '));

const itr =  seasons.entries()
console.log(itr)

for(let obj of itr) {
  console.log(obj[0], obj[1])
}