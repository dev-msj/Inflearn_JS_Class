/**
 * Scope
 * 
 * JS의 변수는 가장 가까운 상위 스코프를 활용한다.
 */
var numberOne = 20;

// levelOne function의 상위 scope인 global level의 numberOne을 가져옴.
function levelOne() {
    console.log(numberOne);
}

// levelOne();

function levelOne() {
    var numberOne = 40;

    // levelOne function 안의 scope에 선언된 numberOne을 가져옴.
    console.log(numberOne);
}

// levelOne();

console.log(numberOne);

function levelOne() {
    var numberOne = 40;

    function levelTwo() {
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`); // 99
        console.log(`levelTwo numberOne : ${numberOne}`); // 40 -> 역시나 상위 scope인 levelOne에 선언된 변수값 적용
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`); //40 -> 당연히 scope인 levelOne에 선언된 변수값 적용
}

levelOne();
console.log(numberOne); // 20 -> levelOne function의 상위 scope인 global level의 numberOne을 가져옴.
// console.log(numberTwo);

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 
 * 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;

function functionOne() {
    var numberThree = 100;

    functionTwo(); // Dynamic Scope 기준이라면, 100을 가져오게 됨.
}

// 하지만 JS는 Lexical Scope이므로 함수가 선언된 위치 기준 상위 스코프에 해당하는 변수값인 3을 가져옴
function functionTwo() {
    console.log(numberThree); // 3
}

functionOne();

var i = 999;

// var는 function level scope만 적용되기 때문에 i가 10이 됨.
for(var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`) // 10

i = 999;
// let은 block level scope도 적용되어 loop 밖의 i값에 영향을 주지 않음.
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`); // 999

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */