/**
 * Async theory
 * 
 * JS Engine은 기본적으로 Single Thread로 동작한다.
 * 그래서 sync 작업들은 Call Stack에서 처리하게 된다.
 * 
 * 하지만 async 작업의 경우에는 Call Stack에 올라갔다가 Task Queue(Event Queue)로 옮겨지게 된다.
 * 그리고 Event Loop가 Task Queue를 계속 watch하면서 종료가 된 작업이 있는지 확인한다.
 * 만약 Task Queue에 종료가 된 작업이 있고 Call Stack이 비어있으면, 
 * Task Queue에서 종료된 작업을 다시 Call Stack으로 가져온다.
 * 그리고 다시 해당 작업에서 sync로 작업해야 될 작업들이 진행된 후 Call Stack에서 제거된다.
 * 
 * -> event_loop.PNG 이미지 참조
 */

// 2초 걸리는 작업을 sync 방식으로 진행
// function longWork() {
//     const now = new Date();

//     /**
//      * milliseconds since epoch
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환한다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World');

// 2초 걸리는 작업을 async 방식으로 진행
function longWork(){
    setTimeout(()=>{
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World');