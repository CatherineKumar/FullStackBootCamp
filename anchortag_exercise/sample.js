// Add dynamic buttons using function and loop
 // https://www.youtube.com/watch?v=gJfUYovSL-Y
 let div = document.createElement('div');
 document.body.appendChild(div);
 let ul = document.createElement('ul');
 let li = null;
 let subLi = null;
 
 let skills = {
    FrontEnd: ['Html', 'Css', 'JavaScript', 'React'],
    BackEnd: ['NodeJs', 'ExpressJs'],
    Database: ['MongoDB', 'MySql']
 };
 const values = Object.entries(skills);

 values.forEach(([key, value]) => {
    let li = document.createElement('li');
    li.innerText = key;
    let subOl = document.createElement('ol');

    for (let i in value){
        let subValue = value[i];
        subLi = document.createElement('li');
        subLi.innerText = subValue;
        subOl.appendChild(subLi);
    }

    li.appendChild(subOl);
    ul.appendChild(li);
 });
 div.appendChild(ul);

