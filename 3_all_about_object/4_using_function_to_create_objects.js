/**
 * Using function to create objects
 */
function IdolModel(name, year){
    // new.target은 new 키워드를 사용하여 생성자 함수를 호출했하면 "Function: IdolModel"을 반환한다.
    // 하지만 new 키워드를 사용하지 않으면 undefined를 반환한다.
    if(!new.target){ // new 키워드를 사용하지 않았으면 new 키워드를 사용한 생성자 함수를 반환한다.
        return new IdolModel(name, year);
    }

    // 생성자 함수에서 this 키워드를 사용하는 이유는 이 키워드를 사용하지 않은 변수는 global 객체에 붙어버리기 때문
    // new 키워드를 사용해 생성자 함수를 호출하면 this는 생성자 함수를 가리킴. 
    // 하지만 new 키워드 사용하지 않고 호출하면 this는 global 객체를 가리킴.
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());
const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);
// console.log(global.name); 

/** 
 * global 객체는 파일이 실행됐을 때 자동으로 생성되는 객체. 
 * javascript 엔진을 node.js에서 실행할 때 필요한 값들을 가짐. 
 * web으로 치면 window object와 비슷함.
 * */ 

const IdolModelArrow = (name, year)=>{
    this.name = name;
    this.year = year;
};

const yuJin3 = new IdolModelArrow('안유진', 2003);