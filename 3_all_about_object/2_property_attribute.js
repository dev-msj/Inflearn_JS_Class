/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                  설정할때 호출되는 함수로 구성된 프로퍼티
 *                  예를들면 getter와 setter
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};

// 객체와 정보를 알고 싶은 property명을 입력하여 해당 데이터에 대한 명세를 얻을 수 있음.
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을
 *               수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면
 *                 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트
 *                   변경이 금지된다. 단, writable이 true인 경우
 *                   값 변경과 writable을 변경하는건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

// 객체가 가진 모든 property에 대한 명세를 얻을 수 있음.
console.log(Object.getOwnPropertyDescriptors(yuJin));

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
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age')); // 액세서 property에 대한 명세 출력

// 간단하게 property를 추가하고 싶은 경우
// yuJin2.height = '172';
// yuJin2['height'] = '172';

// 객체에 property를 추가할 때, 해당 property의 attribute까지 정의하고 싶은 경우
Object.defineProperty(yuJin2, 'height', {
    value: 172,
    // 아래의 attribute들을 정의해주지 않으면 기본으로 false가 된다.
    writable: true,
    enumerable: true,
    configurable: true,
})
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
console.log(yuJin2);

/**
 * 이미 존재하는 property에서 Writable만 변경하고 싶은 경우
 */
Object.defineProperty(yuJin2, 'height', {
    writable:false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('-------------');
yuJin2.height = 172; //Writable이 false이므로 값이 변경되지 않음.
console.log(yuJin2);

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2, 'name', {
    enumerable:false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('-------------');
console.log(Object.keys(yuJin2)); // name은 enumerable가 false이므로 keys에서 제외됨.
for(let key in yuJin2){
    console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// configurable이 false이므로 enumerable을 변경할 수 없다.
// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// });

// writable이 true이므로 value는 변경이 가능하다.
Object.defineProperty(yuJin2, 'height', {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// configurable이 false라도 writable이 true면 값 변경과 writable 변경이 가능하다.
Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// configurable이 false이면서 writable이 false이므로 값 변경과 writable 변경이 불가능하다.
Object.defineProperty(yuJin2, 'height', {
    writable: true,
});