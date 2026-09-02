// 8. Object(객체) 
// -1. 배열(Array)
//   - 순서대로 값을 저장
//   - 집합 자료형
//   - 순서대로 값을 꺼낼 수 있다. (index로)
//   - 자바스크립트의 배열 index는 0부터 시작
//   - 배열의 길이는 .length 라는 속성으로 확인
var array1 = [1, '가', true, null, undefined, [1, 2, 3]];
array1 
console.log(array1[0]); // 배열의 크기를 넘어가는 방번호 입력하는 경우 undefined가 출력됩니다.
console.log(typeof(array1)); // object
// 실습: array1이라는 배열을 만들고 apple, banana, carrot 세개의 문자열을 각 index에 넣어보세요.
var array1 = ['apple', 'banana', 'carrot'];
console.log(array1[0]); // apple
//순서대로 값을 저장하는 자료구조(선형 자료구조)
//맨뒤에 값을 삽입(push), 맨뒤의 값을 제거(pop), 맨앞에 값을 삽입(unshift), 맨앞의 값을 제거(shift)하는 메서드가 존재합니다.
//중간 어딘가에 값을 넣는 경우(splice)
array1.splice(1,0,"ban");
console.log(array1); 
array1.splice(1,1);
array1.push("donut");
array1.unshift("bee");
array1.unshift("betray");
console.log(array1);
//array.splice(start, deleteCount, item1, item2, ...)
// ['apple', 'ban', 'banana', 'carrot']
// JS의 sort는 기본적으로 유니코드로 정렬을 합니다. 숫자는 어떻게 정렬해야 할까요?
var array2 = [-565,-3,556,1.3,NaN,undefined,null,true,0];
console.log(array2.sort(function (a, b){ 
  return a - b; 
})); // [-565, -3, 0, 1.3, 556, NaN, null, true, undefined]

// -2. Set(집합) - 중복을 걸러내는 유형. new Set([1,3,4,5,6,6])
var set1 = [1,2,3,4,5,6,6,]
set1
console.log(typeof(set1)); // object
set1 = new Set(set1);
set1.add(7);
console.log(set1);

// -3. Object(일반 객체) - key(기본 자료형)로 value를 부르는 종류의 dictionary 타입
//   - key는 기본자료형만 사용 가능합니다. (object, array, function은 불가)
//   - key는 중복될 수 없습니다. (중복된 key로 삽입하면 나중에 삽입한 값으로 덮어씌워집니다.)
//   - key의 순서는 보장되지 않습니다. (입력한 순서대로 출력되지 않습니다.)
//   - key 중심으로 움직입니다. value로 key를 찾을 수 없습니다.
//   - key의 자료형은 string, number, boolean, null, undefined, symbol이 가능합니다.
//   - value는 모든 자료형이 가능합니다. (기본자료형, 참조자료형 모두 가능)
var dict1 = {"name": "김연지", "age" : 20, "hobby" : ["자전거 타기", "책읽기"]};
console.log(dict1.name); // 김연지
//dic2를 만들고 가: 가위, 나: 나비, 다 : 다람쥐, 라: 라디오
var dict2 = {"가": "가위", "나": "나비", "다": "다람쥐", "라": "라디오", 1: 1010};
dict2
//특정값을 꺼내고 싶을 때는 key를 이용해서 꺼낼 수 있습니다.
dict2['가']='가랑이';//키가 이미 있으면 값이 변경됨
dict2['마']='마술사';//키가 없으면 추가됨
dict2
delete dict2['가'];//키가 있으면 삭제됨
dict2
console.log(dict2['나']);
console.log(delete dict2['가']);
console.log('가랑이' in dict2);
console.log(Object.keys(dict2));
console.log(Object.values(dict2));
console.log(Object.entries(dict2));//key value 쌍으로 배열로 묶어서 반환
//자체적으로 모두 문자열로 바꿔서 나타냄. // ['나', '다', '라', '1', '마']
// undefined

/* -4. Map: dictionary와 마찬가지로 키-값으로 쌍을 저장합니다. 키로 값을 꺼내 씁니다.
    - 키로 모든 데이터 타입을 받아줍니다. 
    - 삽입 순서대로 요소를 반복할 수 있습니다.
    - size 속성을 사용해서 요소의 개수를 확인할 수 있습니다.
    - set() get()으로 삽입, 조회를 할 수 있습니다.
    - 뎁스가 복잡하거나, 데이터의 입력 순서, 양이 많을 때 
    
*/
var map1 = new Map();
map1.set('가', '가위');//set없이 넣으면 순서가 보장되지 않음. 메서드 무조건 사용하는거 추천.
map1.set('나', '나비');
map1.set('다', '다람쥐');
map1.set(1, 1010);
console.log(map1.get('가'));
map1.delete('나');
console.log(map1);
console.log(Array.from(map1.values()));
console.log(map1.get('다'));
//함수: 코드의 순서를 정해서 한번에 부를 수 있도록 만들어 놓은 덩어리
//입력에 대해 일관된 출력을 보장하는 코드 덩어리
//프로그래밍에서의 함수는 크게 2가지. getter: 만든걸 보여주는 함수, setter: 만든걸 바꾸는 함수

/*
9. 반복문: for-반복의 횟수가 정해져 있을 때/while-반복의 횟수가 정해져 있지 않을 때
-1. for (초기값; 조건; 증감식) {
  반복되어야 할 실행문
}
*/
// 반복되는 숫자를  의미하는 변수를 i, iter, count 등의 변수명을 사용합니다.
for (var a=0; a<3; a++){
  console.log(a);

}
// 1~5까지 출력되도록
//5~1까지 출력되도록
// 실습: 5, 3, 1이 출력되도록 변경
for (var i=1; i<6; i++){
console.log(i);
}

for (var i=5; i>0; i--){
  if(i%2==0){
   } else {
    console.log(i);
  }
}

for (var i=5; i>0; i-=2){
  console.log(i);
}
//좋은 코드
//1. 짧은 코드 (수정할 때도 코드 10줄에 에러가 1번씩 난다)
//2. 반복되는 코드가 없도록
//3. 변수명 함수명 등이 직관적이어서 이해하기 쉬운 코드
//4. 주석이 잘 달려있어서 이해할 수 있는 코드

// 배열의 길이는 .length 라는 속성으로 확인
var arr = ['짱구', '짱아', '훈이'];
for (var i=0; i<arr.length; i++){
  console.log(arr[i]+"야 안녕!");
}
console.log(arr.length); 

const names = ['짱구', '짱아', '훈이'];
names.forEach(name => {
  console.log(`${name}야 안녕!`);
});
dict2
for (var key in dict2) {
  console.log(key)
  console.log(dict2[key])
}

console.log([...map1.entries()])
for(var [key, value] of map1) { 
  console.log(key)
  console.log(`key: ${key} - value: ${value}`)
}
//배열의 방의 개수를 조건식으로 사용
for (var value in arr) {
  console.log(`${value}야 안녕!~`)
}
//방번호를 경유하지 않고 직접 값을 끄집어내는 방문: for in: True/False로 더 이상 끄집어낼 게 없음
//for of 직접 방에 접근해서
//for (하나씩 끄집어 낼 데이터를 부르는 공갈문자 in 집합자료명)


// -2. while문 - 반복할 횟수가 정해지지 않았을 때
// 1. while문 바깥에 조건을 끝낼 실마리를 만들어주기
var i = 1;
//if switch for while 같은 코드블럭들이 안으로 들어가는 동작의 앞뒤에는
//엔터를 쳐서 다른 실행문들과 구분해서 보기 좋게 작성합니다.
while (i < 6) {//조건식
  console.log(i);//실행문
  i++;//증감식
}
//5~1까지 츨력
var i = 5;

while (i >= 1) {
  console.log(i);
  i--;
}
//1, 3, 5
var i = 1;

while (i < 6) {
  console.log(i);
  i+=2;
}

// 2. 무한반복으로 작성하고 break, continue로 강제로 흐름을 제어
var i = 1;
while (true) {
  console.log(i)
  i++;
  if (i > 5) {
    break; //
  }
}
var i = 5;
while (true) {
  console.log(i)
  i--;
  if (i < 1) {
    break; //
  }
}

var i = 1;
while (true) {
  console.log(i)
  i+=2;
  if (i > 5) {
    break; //
  }
}


// arr 와 .length 속성을 이용해서 arr의 모든 원소를 출력하는 while문을 만들어보세요.


// forEach (인덱스를 경유하지 않고 바로 값만 출력하는 메서드)


// for ... of : 인덱스를 경유하지 않고 각 원소에 직접 접근



/* 10. 함수 : 코드를 재사용하기 위해 씁니다.
- 1. 기본형
  function 함수명(파라미터1, 파라미터2, 파리미터3 ...) {
      파라미터를 받아서 실행할 실행문
      return 달고 돌아갈 덩어리 하나    
}

- 2. 익명함수: lambda처럼 쓰고 버리는 걸 기본으로 합니다.
- var 함수명 = function(파라미터1, 파라미터2, 파리미터3 ...) {
      파라미터를 받아서 실행할 실행문
      return 달고 돌아갈 덩어리 하나
}

-3. 화살표함수: () => { 동작 }
*/

var arr = ['짱구', '짱아', '훈이']

// -4. 함수의 스코프
//     1. 스코프 : 변수나 함수가 어디까지 접근해서 사용할 수 있는지. 
//     2. 호이스팅(Hoisting): 변수나 함수의 선언이 스코프의 최상단에서 먼저 읽은 것처럼 동작하는 것. 
//         - 호이스팅은 선언만 끌어올려지고, 값은 끌어올려지지 않습니다.           
//     3. TDZ(Temporal Dead Zone): 변수가 선언되기 전까지 접근할 수 없는 구간
// | 키워드 | 스코프 범위   | 재선언 | 재할당 | 호이스팅     | 특징 요약                           |
// |--------|----------------|--------|--------|--------------|----------------------------------|
// | `var`  | 함수 스코프     | O      | O      | O            | 블록 무시, 중복 선언 가능        |
// | `let`  | 블록 스코프     | X      | O      | O (TDZ)      | 블록 안에서만 유효, 중복 선언 불가|
// | `const`| 블록 스코프     | X      | X      | O (TDZ)      | 상수 선언, 객체 내부 변경 가능    |

//         변수를 선언하는 방법 : 
//     1) var : 함수 단위(스코프)에서 사용이 됨.(블록스코프는 무시)
//                 변수를 새로 만들고 값을 새로 쓸 수 있음.
//     2) let: 블록 단위에서 사용이 됨. { } 
//                 같은 블록 안에서 변수를 중복해 만들 수는 없지만 값은 바꿀 수 있음.
//     3) const : 블록 단위에서 사용이 됨. { } 
//                 한번 값을 넣으면 바꿀 수 없음. 그러나 객체 내부의 속성 등은 수정 가능


// scope : 변수에 접근할 수 있는 위치를 제어 
// var x = '가'; // 함수 범위
// let y = '나'; // 블록 범위
// const z = '다'; // 블록 범위, 상수 (값 변경 불가)

// function variableExample() {
//     var x = 10; // 함수 범위
//     let y = 20; // 블록 범위
//     const z = 30; // 블록 범위, 상수 (값 변경 불가)

//     if (true) {
//         var x = 40; // 같은 함수 내에서 var 변수는 덮어씌워짐
//         let y = 50; // 블록 내에서만 유효
//         const z = 60; // 블록 내에서만 유효

//         console.log('if문 내부:', x, y, z); // 40, 50, 60
//     }

//     console.log('if문 외부:', x, y, z); // 40, 20, 30 (var는 재할당되었지만, let과 const는 블록 범위를 가짐)
// }


/* 11.  클래스: 같은 형식으로 사용하기 위한 자료형을 미리 만들어놓고 계속 객체를 찍어서 재사용 
 - 실제로는 function 으로 만들어집니다.
 - sugar coated 문법: 다른 언어와 호환되다 보니까 class 클래스명으로 만들면 내부적으로 코드를 변환해서 동작시켜줍니다. 
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
    console.log('안녕하세요!' + this.name)
  }

// static: 클래스를 통해 접근하는 클래스 변수, 클래스 메서드
// 인스턴스를 통해 접근하는 인스턴스 변수(this로 전달), 인스턴스 메서드
// 은닉성 구현: #을 붙인 private 변수를 사용하여 외부에서 접근하지 못하도록 숨길 수 있습니다.


