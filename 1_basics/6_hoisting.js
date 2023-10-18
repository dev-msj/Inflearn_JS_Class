/**
 * Hoisting
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기 한다.
 * 아래의 예제처럼 hoistingVar을 출력하고 hoistingVar를 선언 및 할당하고 hoistingVar를 다시 출력하는 케이스를 확인해보자.
 * 그러면 첫번째 출력에서 hoistingVar 변수 선언이 없는데도 undefined를 출력한다.
 * 마치 hoistingVar 변수를 처음 hoistingVar을 출력하기 전에 변수가 선언이라도 된 것처럼 말이다.
 * 하지만 이 것은 JS 언어의 특징이며, 실제로 변수 선언문이 최상단으로 이동되는 것은 아니다.
 * 이에 대한 자세한 내용은 추후 내용에서 자세히 다루도록 한다. 
 * 
 * var, let, const 모두 Hoisting이 가능하다. 또한 함수에서도 발생한다.
 * 하지만 let과 const는 값기 초기화 되기 전에 Hoisting된 변수의 값을 미리 가져오는 것을 방지한다. 
 * -> Cannot access {Hoisting 변수} before initialization 에러 발생
 * 
 * 참고로 변수 선언조차 없는 것을 출력하고자 하면 {출력 변수} is not defined 에러가 발생한다.
*/
console.log(hoistingVar);
var hoistingVar = 'hoistingVar'
console.log(hoistingVar);

console.log(hoistingLet); // hoistingLet is not defined
// let hoistingLet = 'hoisting'; // Cannot access 'hoistingLet' before initialization
// console.log(hoistingLet);

console.log(hoistingConst); // hoistingConst is not defined
// const hoistingConst = 'hoistingConst' // Cannot access 'hoistingConst' before initialization
// console.log(hoistingConst);