let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
  let area = document.getElementById('area1');
  // 생성자 함수를 이용한 정규 표현식 객체 생성
  let regExp = new RegExp('script');  // 생성자의 매개값으로 패턴을 문자열로 지정한다.

  // 리터럴을 이용한 정규 표현식 객체 생성
  let regExp2 = /script/; // 패턴 양쪽에 /로 작성한다.(시작 기호, 종료 기호)

  let str = 'javascript jqueryscript ajax';
  let str2 = 'java jquery ajax';



  console.log(regExp, typeof(regExp));
  console.log(regExp2, typeof(regExp2));


  /*
    RegExp 객체에서 제공하는 메소드
        객체.test(문자열) : 문자열이 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴한다.
        객체.exec(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 처음 매치된 문자열 리턴한다.

    String 객체에서 정규 표현식 객체를 이용하는 메소드
        문자열.match(정규식) : 문자열에 정규식 패턴의 값과 일치하는 값을 리턴한다.
        문자열.replace(정규식, 바꿀값) : 문자열에서 정규식 패턴의 값과 일치하는 부분을 바꿀값으로 변경한다.
        문자열.search(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 부분의 시작인덱스를 리턴한다.
        문자열.split(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을 구분
  */

  area.innerHTML = '<h3>정규 표현식 객체 생성</h3>';
  area.innerHTML += `regExp.test(str) : ${regExp.test(str)} <br>`;
  area.innerHTML += `regExp.test(str2) : ${regExp.test(str2)} <br>`;
  area.innerHTML += `regExp.exec(str) : ${regExp.exec(str)} <br>`;
  area.innerHTML += `regExp.exec(str2) : ${regExp.exec(str2)} <br><br>`;

  // String 객체에서 정규 표현식 객체를 이용하는 메소드
  area.innerHTML += `str.match(regExp) : ${str.match(regExp)} <br>`;
  area.innerHTML += `str.replace(regExp, '스크립트') : ${str.replace(regExp, '스크립트')} <br>`;
  area.innerHTML += `str.search(regExp) : ${str.search(regExp)} <br>`;
  area.innerHTML += `str.split(regExp) : ${str.split(regExp)} <br>`;

});

// 플래그 문자
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
  let area =document.getElementById('area2');
  let str = 'JAvaScript jQueryscript Ajax';
  let regExp = /a/;
  let regExp1 = /a/i;
  let regExp2 = /a/g;
  let regExp3 = /a/ig;
  let regExp4 = /a/gi;

// let str3 = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://
// 동해물과_백두산이 마르고 닳도록
// `;

  area.innerHTML = '<h3>플래그 문자</h3>'

  // '$&'는 패턴을 만족하는 문자열을 가리킨다.
  area.innerHTML += `/a/ : ${str.replace(regExp, '($&)')} <br>`;
  area.innerHTML += `/a/i : ${str.replace(regExp1, '($&)')} <br>`;
  area.innerHTML += `/a/g : ${str.replace(regExp2, '($&)')} <br>`;
  area.innerHTML += `/a/ig : ${str.replace(regExp3, '($&)')} <br>`;
  area.innerHTML += `/a/gi : ${str.replace(regExp4, '($&)')} <br><br>`;
  
  // area.innerHTML += `str3.match(/\.$/gm) : ${str3.match(/\.$/gm)} <br>`;


  let str2 = str = str.replace(regExp4, () => {
    return '+' + match + '+';
  });

  console.log(str2);

  // area.innerHTML += `${str2.replace(regExp4)}`;

});


// 메타 문자
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
  let regExp;
  let str = '';
  let area = document.getElementById('area3');

  // 반복 검색
  // {m,n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다.
  // +는 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다.
  // ?는 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미한다.
  str = 'a aa aaa aaaa';
  regExp = /a{1,2}/g;

  area.innerHTML = '<h3>반복 검색</h3>';
  area.innerHTML += `/a{1,2}/g : ${str.replace(regExp, '($&)')} <br>`;

  regExp = /a{3}/g;
  area.innerHTML += `/a{3}/g : ${str.replace(regExp, '($&)')} <br>`;

  regExp = /a{2,}/g;
  area.innerHTML += `/a{2,}/g : ${str.replace(regExp, '($&)')} <br>`;

  regExp = /a+/g;
  area.innerHTML += `/a+/g : ${str.replace(regExp, '($&)')} <br>`;

  regExp = /a{0,3}/g;
  area.innerHTML += `/a?/g : ${str.replace(regExp, '($&)')} <br>`;

  
  // ^는 문자열의 시작을 의미한다.
  // $는 문자열의 마지막을 의미한다.
  str = 'Javascript\nJquery\nShellscript\nAjax';
  
  area.innerHTML += `<h3>문자열의 앞, 뒤 구분</h3>`;
  
  regExp = /^j/gi;
  area.innerHTML += `/^j/gi : ${str.replace(regExp, '($&)')} <br>`;
  
  regExp = /^j/gim;
  area.innerHTML += `/^j/gim : ${str.replace(regExp, '($&)')} <br>`;
  
  // 얜 적용 안되는듯함
  // regExp = /ipt$/gi;
  // area.innerHTML += `/ipt$/gi : ${str.replace(regExp, '($&)')} <br>`;
  
  regExp = /ipt$/gim;
  area.innerHTML += `/ipt$/gim : ${str.replace(regExp, '($&)')} <br>`;
  
  // OR 검색
  // [...] 내의 문자 중 하나라도 존재할 경우
  // str = 'Javascript Jquery Ajax';
  str = 'Javascript\nJquery\nAjax';

  area.innerHTML += `<h3>OR 검색</h3>`;
  regExp = /[aj]/gi;
  area.innerHTML += `/[aj]/gi : ${str.replace(regExp, '($&)')} <br>`;
  
  regExp = /[^aj]/gi; // [...] 내의 ^은 not을 의미한다.
  area.innerHTML += `/[^aj]/gi : ${str.replace(regExp, '($&)')} <br>`;
  
  regExp = /^[aj]/gim; // [...] 내의 ^은 not을 의미한다.
  area.innerHTML += `/^[aj]/gi : ${str.replace(regExp, '($&)')} <br>`;
  
  str = '123 Javascript';
  regExp = /[a-z]/g;  // 범위를 지정하려면 [...] 내에 -를 사용한다.
  area.innerHTML += `/[a-z]/g : ${str.replace(regExp, '($&)')} <br>`;
  
  regExp = /[A-Z]/g; 
  area.innerHTML += `/[A-Z]/g : ${str.replace(regExp, '($&)')} <br>`;

  regExp = /[0-9]/g; 
  area.innerHTML += `/[0-9]/g : ${str.replace(regExp, '($&)')} <br>`;
  
  regExp = /[0-9A-Z]/g; 
  area.innerHTML += `/[0-9A-Z]/g : ${str.replace(regExp, '($&)')} <br>`;
  
  // 임의의 문자열 검색
  // .은 임의의 문자 한 개를 의미하고, 문자 내용은 무엇이든 상관없다.
  regExp = /..../g;
  area.innerHTML += `<h3>OR 검색</h3>`;
  area.innerHTML += `/..../g : ${str.replace(regExp, '($&)')} <br>`;
  
  
});


// 추가 메타 문자
let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
  let area = document.getElementById('area4');
  let regExp;
  let str = '';
  
  /*
    \d : 숫자를 의미한다.
    \D : 숫자가 아닌 문자를 의미한다.
    \w : 알파벳, 숫자, 언더 스코어(_)를 의미한다.
    \W : 알파벳, 숫자, 언더 스코어(_)가 아닌 문자를 의미한다.
    \s : 공백 문자를 의미한다.(띄어쓰기, 탭, 줄바꿈)
    \S : 공백 문자가 아닌 문자를 의미한다.
  */

  str = 'A1 B2 C3 d_4 e:5 ` ffgg77--__-- \t가\n나\n디';
  regExp = /\d/g;
  
  area.innerHTML = `<h3>추가 메타 문자</h3>`;
  area.innerHTML += `/\\d/g : ${str.replace(regExp, '($&)')} <br>`;
  
  regExp = /\D/g; //  /[^0-9]/g
  area.innerHTML += `/\\D/g : ${str.replace(regExp, '($&)')} <br>`;

  regExp = /\w/g; // /[a-zA-Z0-9_]/g와 결과가 같다.
  area.innerHTML += `/\\w/g : ${str.replace(regExp, '($&)')} <br>`;

  regExp = /\W/g; // /[^a-zA-Z0-9_]/g와 결과가 같다.
  area.innerHTML += `/\\W/g : ${str.replace(regExp, '($&)')} <br>`;

  regExp = /\s/g; // /[ \n\t]/g와 결과가 같다.
  area.innerHTML += `/\\s/g : ${str.replace(regExp, '($&)')} <br>`;

  regExp = /\S/g; // /[^ \n\t]/g와 결과가 같다.
  area.innerHTML += `/\\S/g : ${str.replace(regExp, '($&)')} <br>`;

})