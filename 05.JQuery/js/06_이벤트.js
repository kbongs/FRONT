$(() => {
  // 1. 이벤트 연결
  // 1) on()과 off()
  // $('#area1').on('mouseenter', () => {
  //   $('#area1').css('background-color', 'blue').text('마우스가 올라감');
  // });

  // $('#area1').on('mouseleave', () => {
  //   $(window.event.target).css('background-color', 'hotpink').text('마우스가 내려감');
  // });

  // $('#area1').on('mouseenter mouseleave', (event) => {
  //   console.log(event);

  //   if(event.type === 'mouseenter'){
  //     $('#area1').css('background-color', 'blue').text('마우스가 올라감');
  //   } else if(event.type === 'mouseleave') {
  //     $(window.event.target).css('background-color', 'hotpink').text('마우스가 내려감');
  //   }
  // });

  // $('#area1').on('click', (event) => {
  //   $(event.target)
  //     .css('background-color', 'white')
  //     .test('')
  //     .off('mouseenter mouseleave');
  //     // .off('mouseleave');
  // });


  $('#area1').on({
    mouseenter: () => {
      $('#area1').css('background-color', 'blue').text('마우스가 올라감');
    },
    mouseleave: () => {
      $(window.event.target).css('background-color', 'hotpink').text('마우스가 내려감');
    },
    click: (event) => {
      $(event.target)
      .css('background-color', 'white')
      .test('')
      .off('mouseenter mouseleave');
    }
  });


  // 2) one()
  $('#area2').one('click', () => {
    alert('처음이자 마지막으로 이벤트 핸들러 실행');
  }).css('cursor', 'pointer');


  // 2. 키보드 이벤트
  //   1) keydown(), keypress(), keyup()
  $('#tarea1').on({
    // 키보드가 눌려질 때
    keydown: (event) => {
      console.log(`keydown > event.key : ${event.key}, event.keyCode : ${event.keyCode}`);
    },
    // 글자가 입력될 때 (한글, 펑션키, 기능키 사용못함)
    keypress: (event) => {
      console.log(`keypress > event.key : ${event.key}, event.keyCode : ${event.keyCode}`);
    },
    // 키보드가 때어질 때
    keyup: (event) => {
      console.log(`keyup > event.key : ${event.key}, event.keyCode : ${event.keyCode}`);
    }
  });


  // 2) 동적으로 글자 수 세기
  $('#tarea2').on('keyup', (event) => {


    // let inputValue = $(event.target).val();
    let target = $(event.target);
    let counter = $('#counter');
    // let inputLength = $(event.target).val().length;
    let maxLength = $('#maxLength').text();


    // $('#counter').text(length);

    if((maxLength - target.val().length) < 0) {
      // counter.css('color', 'red');
      target.val(target.val().substr(0, maxLength));
    } else {
      counter.css('color', 'black');
    }

    console.log(target.val().length);
    counter.text(target.val().length);
  });


  // 3) 동적으로 아이디 조건 확인
  let regExp = /^[a-z][a-z\d]{3,11}$/;

  $('#userId').keyup((event) => {
    let userId = $(event.target).val();

    if(regExp.test(userId)) {
      $('#idCheck').css('color', 'green').text('사용 가능한 아이디 형식입니다.');
    } else {
      $('#idCheck').css('color', 'red').text('사용할 수 없는 아이디 형식입니다.');
    }
  });

});