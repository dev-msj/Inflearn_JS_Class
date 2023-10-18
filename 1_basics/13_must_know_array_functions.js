/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push() : 맨 뒤쪽에 값 삽입
// return : array size
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('---------------_');

// pop() : 맨 뒤쪽 값 삭제
// return : array size
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('---------------_');

// shift() : 맨 앞쪽 값 삭제
// return : array size
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift() : 맨 앞쪽에 값 삽입
// return : array size
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('---------------_');

// splice(x, y) : x 이상 y 미만의 array를 잘라내기 -> 기존의 array 수정
console.log(iveMembers.splice(0, 3))
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat(arg) : 기존 array에 arg를 합친 새 array를 반환
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

// slice(x, y) : x 이상 y 미만의 값으로 구성된 array 생성 -> 기존의 array 수정 안함
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator : array를 구성하는 값을 나열
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);


console.log('--------------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers); // spread를 사용해 생성한 array는 기존의 array와 다른 새로운 객체다.

// join(seperator) : array의 값들을 seperator로 구분된 String으로 반환
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map()
console.log('--------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));
console.log(iveMembers);

// filter() : 조건에 해당하는 값들 반환
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find() : 조건에 해당하는 것 중 처음 발견된 값 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex() : 조건에 해당하는 것 중 처음 발견된 값의 index 반환
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce(callback(Previous return value, array Next value), inital Previous return value)
// callback(이전 콜백 함수의 결과값, 하나씩 가져올 array의 값들)
// inital Previous return value : 시작할 때는 콜백의 리턴 값이 없으므로 초기화해줄 값
console.log(numbers.reduce((p, n) => p + n, 0)); // array의 값을 모두 더한 값을 출력

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0))