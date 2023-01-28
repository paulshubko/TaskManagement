//  document.querySelector('#create_task').addEventListener('click', myClick);

//  function myClick(){
//     //console.log('work')
//     let text = document.querySelector('#input_task').value;
//     //document.querySelector('.out').innerHTML = ; тут іннер хтмл 
//     // він заміняє весь контент в пісі-какі-попі. мені треба 
   

//    const newTaskListItemElement = document.createElement('li'); //створюю змінну, яка створює елемент в який буде виводитись написане значення зі строки інпут
//    newTaskListItemElement.textContent = text; //який контент із змінної буде виводитись. Тобто текст)
//    const taskListElement = document.getElementById('task_list'); //сворюємо змінну, яка отримує елемент по айді в який ми будемо вставляти наші введені значення з інпута
//    taskListElement.appendChild(newTaskListItemElement); //змінну таскЛістЕлем вказуємо шо вона буде додаватись в кінці змінної нью_таск_ліст_елем
//  }
//Код шо нижче, я його спиздив і адаптував під свої айдішки + розписую пояснення до кожного рядку (бо я поки не сильно вумний)
let button = document.getElementById('create_task'); //оголосив змінну для роботи на js по айді HTML файла
let ul = document.getElementById('task_list'); //оголосив змінну для роботи на js по айді HTML файла
let output = document.getElementsByName('out'); //оголосив змінну для роботи на js по айді HTML файла
let total = document.getElementById('total'); //оголосив змінну для роботи на js по айді HTML файла

button.addEventListener("click", addTask); //обробник подій із змінної button додавати нове завдання
function addTask() { //створення функції додавання задачі
  let checkbox = document.createElement('input_task');//створення змінної = створення елемента з заданим текстом із інпут таск
  checkbox.setAttribute("type", "checkbox"); //змінну чекбокс задаєм атрибут вибірку по "типу" і "чекбоксу"
  
  total.textContent = +total.textContent + 1; //додає +1 до кількості підрахунку загального лічильника
  
  let label = document.createElement("LABEL"); //створення крапочки перед текстом
  let li = document.createElement("LI"); //створення нового елемента лі
  let task = document.createTextNode(document.getElementById('input_task').value); //створення віртуального виведення з комірки інпут таск
  label.appendChild(task) // новостворена крапочка йде в кінець списку
  li.appendChild(label) //новостворена крапочка йде в кінець списку
  ul.appendChild(li) //з тега ул входить значення лі в кінець списку
}
