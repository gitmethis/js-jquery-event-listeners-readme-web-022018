//define functions here



// call functions here
   function getIt(){
     $('p').on('click', ()=>{
       alert('Hey!')
     })
   }
   
   function frameIt(){
     $('img').on('load', ()=>{
       $('img').addClass('tasty')
     })
   }
   
   function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}
   
   function pressIt(){
     $('input').on('keydown', ()=>{
       alert('bro')
     })  
   }
   
   function submitIt(){
     $('form').on('submit', ()=>{
       alert('Your form is going to be submitted now.')
     }) 
   }

