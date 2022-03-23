$(document).ready(() => {
  // 효과
  // 1. show()와 hide()
  $('#show').on('click', () => {
    $('#imgFlower').show(1500, 'linear');
  });

  $('#hide').on('click', () => {
    $('#imgFlower').hide(1500);
  });

  $('#toggle').on('click', () => {
    if($('#imgFlower').css('display') === 'none') {
      $('#imgFlower').show(1500, 'linear');
    } else {
      $('#imgFlower').hide(1500, 'swing');
    }

    // $('#toggle').on('click', () => {
    //   $('#imgFlower').toggle(1500);
    // });

  });

  // 2. slideDown()와 slideUp()
  $('.menu').on('click', (event) => {
    let content = $(event.target).next();

    // if(content.css('display') === 'none') {
    //   content.slideDown(1000, 'swing');
    // } else {
    //   content.slideUp(1000, 'swing');
    // }

    // slideToggle()를 사용하여 slideDown, slideUp을 싫행
    // $(event.target).next().slideToggle(500, 'swing');

    //하나의 컨텐츠만 slideDown 되도록 수정
    $('.contents').slideUp(500, 'swing');
    $(event.target).next().slideDown(500, 'swing');

  });

  // 3. fadeIn()와 fadeOut()
  // $('#fadeIn').on('click', () => {
  //   $('#imgForest').fadeIn(1500);
  // });

  // $('#fadeOut').on('click', () => {
  //   $('#imgForest').fadeOut(1500);
  // });

    $('#fadeToggle').on('click', () => {
    $('#imgForest').fadeToggle(1500);
  });

  $('#imgForest').hover(
    (event) => {
      if(event.type === 'mouseenter'){
        $(event.target).fadeTo(500, 0.5);
      } else if (event.type === 'mouseleave') {
        $(event.target).fadeTo(500, 0.5);
      }
    }
  )


});