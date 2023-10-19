/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * Extensible
 */
console.log(Object.isExtensible(yuJin));

// Extensible하기 때문에 property를 추가할 수 있다.
yuJin['position'] = 'vocal';

console.log(yuJin);

// prevent의 뜻은 "막다 | 방해하다"로 Extension이 안되게 변경하는 method다.
Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));

// preventExtensions으로 인해 Extensible가 false가 되어 groupName property를 추가할 수 없다.
yuJin['groupName'] = '아이브';
console.log(yuJin);

// Extensible가 false더라도 property 삭제는 가능하다.
delete yuJin['position'];
console.log(yuJin);

/**
 * Seal : "봉인한다"라는 뜻을 가짐
 * 
 * 객체의 모든 property을 대상으로 attribute의 configurable을 false로 만드는 것과 동일한 작업을 하는 동시에
 * 새로운 property의 추가/삭제를 못하게 한다.
 * 하지만 writable을 false로 변경하지 않으므로 해당 값이 true인 property는 값 변경이 가능하다.
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);

// Seal의 기본값은 false다.
console.log(Object.isSealed(yuJin2));

// yuJin2 객체를 봉인
Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

// yuJin2는 Sealed 상태이므로 groupName을 추가할 수 없음.
yuJin2['groupName'] = '아이브';
console.log(yuJin2);

// yuJin2는 Sealed 상태이므로 name을 삭제할 수 없음.
delete yuJin2['name'];
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 * 
 * 가장 높은 immutable 등급으로 읽기 외에 모든 기능을 불가능하게 만든다.
 * Extensible과 Seal 기능을 추가하고 나서 property attribute의 writable까지 false로 만드는 기능이라고 볼 수 있다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);

console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

// Freezed 상태이므로 defineProperty는 에러를 발생시킨다.
// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// })
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung'])); // 하위 객체인 wonYoung은 freezed 상태가 되지 않음