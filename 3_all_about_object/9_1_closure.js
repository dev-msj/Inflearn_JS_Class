/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical 
 * environemnt within which that function was declared
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 * 
 * 정리 -> "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다."
 */

// Normal Case
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

// console.log(number);

// console.log(getNumber());


// Closure Example Case
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber(); // 아직 Execute 되지 않은 innerGetNumber 함수 반환

console.log(runner);
console.log(runner()); // innerGetNumber가 getNumber가 종료된 후에 실행되어 Closure 케이스에 해당


// ---- 주로 사용되는 케이스 ----

// 1) 데이터 캐싱1 : 특정 값을 반복적으로 사용해야 할 때
function cacheFunction() {
    // 만약 이 연산이 매우 오래 걸린다는 복잡한 연산이라고 가정한다면
    var number = 10 * 10;

    // 하위 함수에 복잡한 연산의 결과값을 활용한 연산을 정의하고
    function innerCacheFunction(newNumb){
        return number * newNumb;
    }

    // 복잡한 연산의 결과값을 Closure로 가지는 innerCacheFunction을 반환한다.
    return innerCacheFunction;
}

// 각자 다른 argument를 가지는 innerCacheFunction을 여러번 실행해도 cacheFunction의 복잡한 연산을 반복할 필요가 없다.
const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

// 데이터 캐싱2 : 반복적으로 특정 값을 변환해야 할 때
function cacheFunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}

// cacheFunction2의 number를 Closure로 사용하여 increment 함수가 실행될 때마다 Closure의 number를 변환한다.
const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102
console.log(runner3()); // 103
console.log(runner3()); // 104
console.log(runner3()); // 105
console.log(runner3()); // 106

/**
 * 3) 정보 은닉
 * 
 * JS에서는 "#"을 활용하여 private 변수를 생성하는 방식이 생긴지 얼마 되지 않음.
 * 그래서 그 이전에는 Closure를 활용해 private 변수처럼 활용했음.
 */
function Idol(name, year){
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear()); // 안녕하세요 저는 안유진입니다. 2003에 태어났습니다. -> Closure를 통해 _year에 접근

console.log(yuJin.name); // 안유진
console.log(yuJin._year); // undefined -> yuJin 객체에서 직접 접근할 수 없음.