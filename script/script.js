 document.querySelector('#create_task').addEventListener('click', myClick);

 function myClick(){
    //console.log('work')
    let text = document.querySelector('.i-1').value;
    //console.log(a);
    //document.querySelector('.out').innerHTML = ; тут іннер хтмл 
    // він заміняє весь контент в пісі-какі-попі. мені треба 
   

   const piratik = document.createElement('li');
   piratik.textContent = text;
   const pandora = document.getElementById('ul');
   pandora.appendChild(piratik);
 }
//  const button = document.querySelector('button')
//  button.onclick = myClick