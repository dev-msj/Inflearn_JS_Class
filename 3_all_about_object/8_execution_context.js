/**
 * Execution Context는 실행하려는 JS 코드와 코드를 실행할 때 필요한 정보를 담고 있는 특수한 환경.
 * 코드 실행에 필요한 모든 데이터를 들고 있는 환경이라고 생각하면 됨.
 * 
 * Execution Context는 크게 2가지로 나뉨.
 * - Global Context : 최상위 Exectuion Context. 
 *                    코드를 실행하면 무조건 생성되는 Context로 웹에서의 window 객체나 nodeJS의 global 객체에 해당.
 * - Function Context : 함수가 실행될 때마다 함수별로 실행되는 context.
 *                      함수 실행에 대한 모든 정보를 가진다.
 */

/**
 * Execution Context Stack Phase
 * 
 * 1. Creation Phase
 *    1. Global Object를 생성. window 또는 global 객체기 생성되고 함수에서는 arguments 객체가 생성.
 *    2. this를 window 또는 global 객체에 바인딩.
 *    3. 변수와 함수를 Memory Heap에 배정하고 기본값을 undefined로 저장. 
 *       -> Hoisting이 발생하는 이유. 실행 전에 이미 변수와 함수를 메모리에 등록하기 때문
 * 
 * 2. Execution Phase
 *    1. 코드를 실행한다.
 *    2. 필요하다면 새로운 Execution Context를 생성한다.
 */