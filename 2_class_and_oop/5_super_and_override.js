/**
 * Super and Override
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    // 노래 / 춤 
    part;

    constructor(name, year, part) {
        super(name, year);
        this.part = part;
    }

    sayHello() {
        // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`; // constructor이 아닌 곳에서 super의 property에 접근할 때는 this를 사용해야 한다.
        return `${super.sayHello()} ${this.part}를 맡고있습니다.`; // super의 method를 실행할 때는 this가 아닌 super를 사용한다.
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());