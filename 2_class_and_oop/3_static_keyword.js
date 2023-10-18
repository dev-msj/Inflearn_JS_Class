/**
 * Static Keyword
 */
// class IdolModel {
//     name;
//     year;
//     static groupName = '아이브'; // static property를 생성하는 방법

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     static returnGroupName(){ // static method를 생성하는 방법
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor : new 키워드를 직접 사용하지 않아도 객체를 생성할 수 있게 하는 방법
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) { // object로부터 IdolModel class의 인스턴스를 생성하겠다.
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list) { // list로부터 IdolModel class의 인스턴스를 생성하겠다.
        return new IdolModel(
            list[0],
            list[1],
        );
    }
}

const yuJin2 = IdolModel.fromObject(
    { // object를 통해 IdolModel 인스턴스를 생성한다.
        name: '안유진',
        year: 2003,
    }
);
console.log(yuJin2);

const wonYoung = IdolModel.fromList(
    [ // list를 통해 IdolModel 인스턴스를 생성한다.
        '장원영',
        2003,
    ]
);
console.log(wonYoung);