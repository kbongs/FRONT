function test1() {
  let label1 = document.getElementById('la1').innerHTML.split(',');
  let label2 = document.getElementById('la2').innerHTML.split(',');
  let label3 = document.getElementById('la3').innerHTML.split(',');
  let label4 = document.getElementById('la4').innerHTML.split(',');

  console.log(label1);

  let arr = label1.concat(label2, label3, label4);

  // console.log(arr);

  let typing = document.getElementById('text').value;
  let index = arr.indexOf(typing);

  if(index >= 0) {
    alert(`입력하신 ${typing}는 index ${index}번째 존재 합니다.`);
  } else {
    alert('존재하지 않습니다.');
  }
}

function test2() {
  let label1 = document.getElementById('stringla1').innerHTML.split(' ');
  let label2 = document.getElementById('stringla2').innerHTML.split(' ');

  // console.log(label1);
  console.log(label1.reverse());
  // console.log(label2);
  console.log(label2.reverse());

  let arr = label1.concat(label2);
  console.log(arr);
  

  let reverse = document.getElementById('reverse');

  let result = '';
  for(let i = 0; i < arr.length; i++){
    result += arr[i];
  }

  // console.log(result);

  reverse.innerHTML = `정답 : "${result}"`;

}


// 문제 3
let arr = [];
let result = [];

function input() {
  let input = document.getElementById('strInput');

  arr.push(input.value);

  input.value = '';
  document.getElementById('strInput').focus();

  arr.sort().reverse();

  console.log(arr);

  result = arr.join(', ');

}

function test3() {
  let print = document.getElementById('print1');

  print.innerHTML = result;
}


// 문제 4
function test4() {
  let label = document.getElementById('stringla4').innerHTML.split(' ');
  let remove = document.getElementById('remove').value;
  let add = document.getElementById('add').value;
  let print2 = document.getElementById('print2');

  console.log(remove);
  console.log(add);
  
  for(let i = 0; i < label.length; i++){
    if(label[i] === remove){
      label.splice(i, 1);

      break;
    }
  }

  label.push(add);

  print2.innerHTML = label.join(' ');

}





