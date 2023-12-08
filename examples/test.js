function sum()

{

var result=0;

for(let i=0;i<arguments.length;i++)

{

result+=arguments[i];

}

console.log(result);

}

sum(3,5,2);