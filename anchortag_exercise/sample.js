function display(msg) {

   return new Promise(( resolve, reject ) =>{

       if( msg != null ){

           console.log(msg);

           return;

       }

       reject(new Error("Message not provided"));

   });

}



let promise = display();



promise

.then(() => {

   console.log('Success!');

})



.then(() => {

   console.log('Success!!');

})



.catch((error) => {

   console.log(error.message);

})



.then(() => {

   console.log('Success!!!');

});