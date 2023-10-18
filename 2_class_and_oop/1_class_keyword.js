/**
 * Class Keyword
 */
class IdolModel {
    name;
    year;
    // JS에서는 class 상단에서 property를 정의해주지 않아도 constructor를 통해 정의해줄 수 있다.
    // 하지만 미리 property를 정의해주는 것이 개발자 간의 원활한 소통을 위해서라도 좋다.

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName() {
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel); // JS에서 class는 function으로 정의한다.
console.log(typeof yuJin); // class를 통해 생성된 인스턴스는 object다.