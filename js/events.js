//define functions here

$(document).ready(function(){

// call functions here
   function getIt(){
     $('p').on('click', ()=>{
       alert('Hey!')
     })
   }
   
   function frameIt(){
     $('img').on('load', ()=>{
       $('img').addClass = 'tasty'
     })
   }
   
   function pressIt(){
     $('input').on('keydown', ()=>{
       alert('bro')
     })  
   }
   
});
