/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__); // [Ibject: null prototype] {}

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);

// IdolModel.prototype의 숨겨진 값을 출력하는 법
// console.dir(IdolModel.prototype, {
//     showHidden: true,
// });

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

/**
 * 실제로 new 키워드를 통해 IdolModel의 객체를 생성하게 되면
 * 생성된 객체인 yujin의 __proto__에는 IdolModel.prototype 값을 저장하게 된다.
 * 정리하자면 다음과 같이 된다.
 * 
 *   - yujin.__proto__ -> IdolModel.prototype
 *   - IdolModel.__proto__ -> Function.prototype
 *   - IdolModel.prototype.__proto__ -> Object.prototype
 *   - Function.__proto__ -> Object.prototype
 * 
 * 
 * 이를 통해 유추해보자면 Java에서 모든 객체의 최상단에는 Object가 있는 것처럼
 * JS도 prototype을 활용해 객체 최상단에 Object가 있도록 만든 것으로 보인다.
 * 
 * -> prototype_chain.PNG 이미지 참조
 */

// 최상위 객체인 Object의 toString을 상속받았다는 증거
console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false

// 상속받은 property인지 인스턴스 고유의 property인지 확인
console.log(yuJin2.hasOwnProperty('sayHello')); // true

/**
 * JS에서 Function은 객체다.
 * 그렇기 때문에 같은 클래스에 있는 function이라고 하더라도 
 * 동일한 2개의 인스턴스가 각각의 function을 생성하기 때문에 서로 다른 property로 인식되는 것 같다.
 * 
 * -> prototype_function_in_class.PNG 이미지 참조
 */

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

// prototype에 function을 정의하면 동일한 function 객체를 사용하게 된다.
// -> prototype_function_define.PNG 이미지 참조
IdolModel3.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello);

console.log(yuJin3.hasOwnProperty('sayHello'));

// IdolModel3에 static method property를 직접 정의해줄 수 있다.
IdolModel3.sayStaticHello = function () {
    return '안녕하세요 저는 static method 입니다.';
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    // 아래에 prototype에 정의된 sayHello 함수를 override함. -> 프로퍼티 셰도잉
    this.sayHello = function () {
        return '안녕하세요 저는 인스턴스 메서드입니다!';
    }
}

IdolModel4.prototype.sayHello = function () {
    return '안녕하세요 저는 prototype 메서드입니다!';
}

const yuJin4 = new IdolModel4('안유진', 2003);

// 프로퍼티 셰도잉 - class에서 override와 동일
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function () {
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // Object.getPrototypeOf(gaEul)는 gaEul.__proto__와 동일하다

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.sayHello());

Object.setPrototypeOf(ray, IdolModel.prototype); // 인스턴스의 prototype을 변경
console.log(ray.sayHello());

// 생성자도 prototype에 있기 때문에, prototype이 변경되면 생성자도 당연히 변경된 prototype을 따라간다.
console.log(ray.constructor === FemaleIdolModel); // false
console.log(ray.constructor === IdolModel); // ture
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false -> FemaleIdolModel의 prototype은 변경되지 않고, ray만 변경된 것을 알 수 있음.
// -> prototype_set_instance.PNG 이미지 참조

FemaleIdolModel.prototype = IdolModel.prototype; // 함수의 prototype을 변경

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true
// -> 함수의 prototype을 변경해버리면 생성된 인스턴스들도 영향을 받는다.
// -> prototype_set_function.PNG 이미지 참조