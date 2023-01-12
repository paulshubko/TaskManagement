 document.querySelector('#create_task').addEventListener('click', myClick);

 function myClick(){
    //console.log('work')
    let text = document.querySelector('#input_task').value;
    //console.log(a);
    //document.querySelector('.out').innerHTML = ; тут іннер хтмл 
    // він заміняє весь контент в пісі-какі-попі. мені треба 
   

   const new_Task_List_Item_Element = document.createElement('li'); //створюю змінну, яка створює елемент в який буде виводитись написане значення зі строки інпут
   new_Task_List_Item_Element.textContent = text; //який контент із змінної буде виводитись. Тобто текст)
   const task_List_Element = document.getElementById('task_list'); //сворюємо змінну, яка отримує елемент по айді в який ми будемо вставляти наші введені значення з інпута
   task_List_Element.appendChild(new_Task_List_Item_Element); //змінну таскЛістЕлем вказуємо шо вона буде додаватись в кінці змінної нью_таск_ліст_елем
 }
