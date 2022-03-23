// 이벤트 모델의 종류
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.onclick = () => {
  alert('btn1');
};

btn2.onclick = () => {
  alert('btn2가 클릭되면서 btn1의 이벤트를 제거하였습니다.');

  btn1.onclick = null;
};

// 2) 인라인 이벤트 모델
function test1() {

  alert('다시입력 ㄱㄱ');
}


// 3) 표준 이벤트 모델
let btn3 = document.getElementById('btn3');

// btn3.addEventListener('click', clickEventHandler()); // 전체 말고 함수 이름만 전달!
btn3.addEventListener('click', clickEventHandler);
btn3.addEventListener('mouseenter', (event) => {
  console.log(event.target.style.backgroundColor='red');
  console.log(event);
});
btn3.addEventListener('mouseout', (event) => {
  console.log(event.target.style.backgroundColor='#669900');
  console.log(event);
})

function clickEventHandler() {
  alert('표준 이벤트 모델')
}


// 이벤트가 발생한 해당 요소 객체에 접근하는 방법
// 1) 고전 이벤트 방식
let btn4 = document.getElementById('btn4');
// btn4.onclick = function(event) {
//   console.log(event.target);
//   console.log(window.event.target);
//   console.log(this);
// }

btn4.onclick = (event) => {
  console.log(event.target);
  console.log(window.event.target);
  // console.log(this); 애로우함수 에서는 윈도우 찍음
}


// 2) 인라인 이벤트 방식
function test2(event) {
  console.log(event); // 매개값으로 이벤트 객체를 가져올 수 없다.
  console.log(window.event.target);
  console.log(this);  // 객체 내부에 있는것이 아니기 때문에 window 객체를 가리킨다.
}


// 3) 표준 이벤트 방식
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function(event) {
  console.log(event.target);
  console.log(window.event.target);
  console.log(this); 
})

// 태그별 기본적으로 가지고 있는 이벤트 제거
// 1) 기본 이벤트 제거 1
// 비밀번호 확인하는 코드
function test3() {
  let pass1 = document.getElementById('pass1').value;
  let pass2 = document.getElementById('pass2').value;

  console.log(pass1);
  console.log(pass2);

  if(pass1 !== pass2){
    alert('비밀번호가 일치하지 않습니다.');

    return false;
  }
}

// 기본 이벤트 제거 2
let submit = document.getElementById('submit');

// submit.onclick = () => {
//   alert('정상적으로 입력해주세요');

//   return false;
// }

submit.addEventListener('click', (event) => {
  
  let userId = document.getElementById('userId').value;
  let id = /^[a-zA-Z0-9]{5,12}$/;
  
  // if (!id.test(document.getElementById('userId').value)) {
  //   alert('아이디를 정상적으로 입력해 주세요');
  //   event.preventDefault();
  //   }
    


  if (!id.test(userId)) {
    alert('아이디를 정상적으로 입력해 주세요');
    event.preventDefault();
    }
    
})