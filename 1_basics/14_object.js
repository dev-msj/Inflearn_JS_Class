/**
 * Object / 객체
 */

// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function () {
        return `${this.name}이 춤을 춥니다.`; // 여기서 this는 yuJin 객체를 가리킨다.
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue, // key에 변수를 넣을 때는 []로 감싼다.
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`; 
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin'; // 새로운 property를 추가
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다. -> const 변수가 가지는 객체의 주소값은 변경할 수 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다. -> const 변수가 가지는 주소값에 존재하는 객체는 수정할 수 있다.
 */
const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung);

// wonYoung = {};

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';

const yuJin3 = {
    name: name,
    name, // 윗 줄에 선언한 방식과 여기서 선언한 방식은 동일한 것이다. 즉, name: '안유진'이 선언된 것이다.
};
console.log(yuJin3);