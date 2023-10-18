/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과 
 * 한 개의 Object Type이 있다.
 * 
 * Primitive Type
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefinded
 * 5) null
 * 6) Symbol - 최근에 생긴 타입
 * 
 * Object
 * 1) Function
 * 2) Array
 * 3) Object
 * 
 * 타입을 확인하고 싶을 때 - typeof {변수}
 */


/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시나 따옴표 같은 문자 출력 -> \{\ | ' | "}
 * 4) ``으로 작성하게 되면 위 1, 2, 3의 방법을 사용하지 않아도 된다.
 * 5) `` 안에서 ${변수명}으로 사용하면 String Format 형식으로 사용할 수 있다.
 */

const example4 = `asdf'"///

asdf`;
console.log(example4);

console.log(`example5 -> ${example4}`);


/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 
 * 직접 undefined로 값을 초기화하는 것은 지양해야 한다.
 */


/**
 * null
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용됨.
 */


/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 Primitive 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 * Object 타입을 쓸 때 유용하게 사용할 수 있다.
 */
const variable1 = '1';
const variable2 = '1';
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(variable1 === variable2);
console.log(symbol1 === symbol2);


/**
 * Object 타입
 * 
 * Map - key|value pair
 * Array - 값을 리스트로 나열
 */

const dict = {
    red: '빨간색',
    blue: '파란색',
    green: '초록색',
    yellow: '노란색'
}
console.log(dict);

const newJeans = [
    '강해린',
    '김민지',
    '팜하니',
    '다니엘',
    '이해인'
]
console.log(newJeans);


/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시한다. -> C, Java...
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다. -> JS, Python...
 */