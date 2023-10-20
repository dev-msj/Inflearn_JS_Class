/**
 * Async / Await : 현대에 가장 많이 사용되는 async 프로그래밍 문법.
 *                 기존의 Promise 문법 또한 직관적이지 못하다는 점을 보완.
 * 
 * async 함수의 내부 동작만 보면 작성된 코드 순서대로 동작한다.
 * 하지만 함수 자체가 async task가 되기 때문에, 이 함수의 종료를 기다리지 않고 다음 코드들을 실행한다.
 */
const getPromise = (seconds)=> new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
        // reject('에러');
    }, seconds * 1000)
});

// async 함수 정의
async function runner() {
    try {
        // await는 resolve가 받은 값을 반환한다. await는 Promise에만 쓸 수 있음.
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    } catch(e) { // reject가 호출되면 e에 reject가 받은 값을 전달한다.
        console.log('---catch e---');
        console.log(e);
    } finally {
        console.log('---finally---');
    }
}

runner();
console.log('runner 함수의 종료를 기다리지 않음.');