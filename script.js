let calculator = document.getElementById('calculator'),
display = document.getElementById('display');

calculator.addEventListener('click',  (e) => {
  if (e.target.nodeName=="BUTTON") {
    switch (e.target.textContent) {
      case 'C':
       reset()
        break;
      case 'DEL':
      deletenum()
      break;
      case '=':
        evaluate()
        break;
        default:
        add(e.target.textContent)
      
    }
  }
})

function reset() {
  display.textContent= '';
}
function  add(value) {
  display.textContent = display.textContent + value;
}
function deletenum() {
  let currentcontent= display.textContent; 
  display.textContent = currentcontent.substring(0, display.textContent.length - 1)
}
function evaluate() {
  try {
    let calculation = math.evaluate(display.textContent);
    display.textContent = calculation ;
  }
  catch{
    display.textContent='Math Error';
  }
}
