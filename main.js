
let name = prompt('Введите ваше имя', '');

if (name == 'Yasmina Ushurova') {
  alert('Верно!');
} else {
  alert('Неправильно.');
}

// ------------------

const num1 = 14;
const num2 = 6;

console.log(num1 > num2);

// ------------------

const colorList = [
    {name: 'yellow', interval: 500},
    {name: 'red', interval: 4000},
    {name: 'yellow', interval: 500},
    {name: 'green', interval: 4000}
  ];
  
  
  let count = 0;
  
  function changeColor() {
    if (count === colorList.length) {
      count = 0;
    }
    console.log(colorList[count].name)
    setTimeout(changeColor, colorList[count].interval)
    count = count + 1;
  }
  
  changeColor()

  