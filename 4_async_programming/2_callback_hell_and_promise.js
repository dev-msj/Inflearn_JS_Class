/**
 * Callback : 작업을 정의해주고서 나중에 실행되는 함수. JS에서 가장 먼저 사용된 async 함수
 */
function waitAndRun() {
    // 특정 시간이 지나고 실행되는 callback 함수
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

// 3개의 timeout을 2초마다 실행
function waitAndRun2() {
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
            setTimeout(() => {
                console.log('2번 콜백 끝');
                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
}

// waitAndRun2();

/**
 * Promise : Callback 지옥을 벗어나기 위해 나온 객체.
 * 
 * 비동기 처리의 복잡도가 올라갈수록 Callback 함수가 위에 보이는 것처럼 들여쓰기를 계속하게 된다.
 * 위의 경우처럼 Callback 함수를 3개만 정의해도 가독성이 매우 떨어지게 된다.
 * 이러한 상황을 Callback 지옥이라고 부른다.
 */

/**
 * resolve : 비동기 작업이 정상적으로 처리되었을 때 호출
 * reject : 에러가 났을 때 호출
 */
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// 위 Promise에서 resolve에 전달한 값을 then의 res가 받게 된다.
// timeoutPromise.then((res) => {
//     console.log('---then---');
//     console.log(res);
// });

// Promise를 반환하는 함수 작성.
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if(xxx){
        //     resolve('성공')
        // }else{
        //     reject('에러');
        // }
        resolve('에러');
    }, seconds * 1000);
});

// Promise 여러번 연속해서 호출할 수 있다.
// getPromise(3)
//     .then((res) => {
//         console.log('--- first then ---');
//         console.log(res);

//         return getPromise(3)
//     })
//     .then((res)=>{
//         console.log('--- second then ---');
//         console.log(res);
//     });

// getPromise(3)
//     .then((res) => { // resolve를 호출했을 때
//         console.log('--- first then ---');
//         console.log(res);
//     })
//     .catch((res) => { // reject를 호출했을 때
//         console.log('--- first catch ---');
//         console.log(res);
//     })
//     .finally(() => { // Promise 마지막에 무조건 실행. argument는 받지 않음.
//         console.log('--- finally ---');
//     });

// 여러개의 Promise를 모두 동시에 실행시킴. 실행시킬 Promise들을 List 형태로 전달
Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res) => { // then 또는 catch는 여러개의 Promise들이 모두 끝난 후에 동작.
    // 결과값도 List 형태로 전달됨.
    console.log(res);
});